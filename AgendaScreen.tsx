import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { agendaStyles as styles } from './styles/Agenda';

export default function AgendaScreen() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [modalCitaVisible, setModalCitaVisible] = useState(false);
  const [modalMedVisible, setModalMedVisible] = useState(false);

  // ARREGLOS Y ESTADOS VACÍOS (A LA ESPERA DEL BACKEND / API)
  const [citasList] = useState<Array<any>>([]);
  const [medicamentosList] = useState<Array<any>>([]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        
        {/* Header Superior */}
        <View style={styles.headerRow}>
          <View style={styles.brandRow}>
            <View style={styles.logoBadge}>
              <Ionicons name="heart" size={16} color="#FFFFFF" />
            </View>
            <Text style={styles.brandName}>NEOMA</Text>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Feather name="bell" size={18} color="#1E3A2B" />
          </TouchableOpacity>
        </View>

        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Agenda de Salud</Text>
          <Text style={styles.subTitleDate}>Selecciona un día para gestionar tus citas</Text>
        </View>

        {/* Tarjeta de Calendario Interactivo */}
        <View style={styles.cardCalendarContainer}>
          <View style={styles.calendarHeaderTop}>
            <View style={styles.calendarTitleBox}>
              <View style={styles.calendarIconCircle}>
                <Feather name="calendar" size={16} color="#2E7D32" />
              </View>
              <View>
                <Text style={styles.calendarMainTitleText}>Citas y Recordatorios</Text>
                <Text style={styles.calendarSubTitleText}>
                  {citasList.length > 0 ? `${citasList.length} citas este mes` : 'Sin citas agendadas'}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.addCitaBtn} onPress={() => setModalCitaVisible(true)}>
              <Feather name="plus" size={14} color="#FFFFFF" />
              <Text style={styles.addCitaBtnText}>Agregar Cita</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.monthNavRow}>
            <Feather name="chevron-left" size={18} color="#1E3A2B" />
            <Text style={styles.monthText}>Mes Actual</Text>
            <Feather name="chevron-right" size={18} color="#1E3A2B" />
          </View>

          <View style={styles.weekDaysRow}>
            {['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'].map((d, i) => (
              <Text key={i} style={styles.weekDayText}>{d}</Text>
            ))}
          </View>

          {/* Cuadrícula de Días */}
          <View style={styles.daysGrid}>
            {[...Array(31)].map((_, index) => {
              const dayNum = index + 1;
              const isSelected = dayNum === selectedDay;
              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.dayBox, isSelected && styles.dayBoxSelected]}
                  onPress={() => setSelectedDay(dayNum)}
                >
                  <Text style={[styles.dayText, isSelected && styles.dayTextSelected]}>{dayNum}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Detalle del día seleccionado */}
          <View style={styles.selectedDayDetailCard}>
            <View style={styles.selectedDayInfo}>
              <View>
                <Text style={styles.detailSpecialty}>
                  {selectedDay ? `Día seleccionado: ${selectedDay}` : 'Ningún día seleccionado'}
                </Text>
                <Text style={styles.detailDoctorDate}>
                  {selectedDay ? 'Sin eventos programados' : 'Toca una fecha para ver más'}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.miniAddBtn} onPress={() => setModalCitaVisible(true)}>
              <Text style={styles.miniAddBtnText}>+ Agregar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Próximas Citas */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>PRÓXIMAS CITAS</Text>
          <Text style={styles.sectionCounter}>{citasList.length} agendadas</Text>
        </View>

        {citasList.length === 0 ? (
          <View style={{ padding: 18, alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 16, marginBottom: 16 }}>
            <Text style={{ fontSize: 12, color: '#9AA098', fontStyle: 'italic' }}>
              No tienes citas médicas programadas.
            </Text>
          </View>
        ) : (
          citasList.map((cita) => (
            <View key={cita.id} style={styles.appointmentCard}>
              <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <View style={[styles.appointmentDateBadge, { backgroundColor: cita.color || '#1E3A2B' }]}>
                  <Text style={styles.appointmentDayNumber}>{cita.dia}</Text>
                  <Text style={styles.appointmentMonthText}>{cita.mes}</Text>
                </View>
                <View style={styles.appointmentInfoBox}>
                  <Text style={styles.appointmentSpecialty}>{cita.especialidad}</Text>
                  <Text style={styles.appointmentDoctor}>{cita.doctor}</Text>
                </View>
              </View>
              <Feather name="chevron-right" size={18} color="#828B84" />
            </View>
          ))
        )}

        {/* Sección de Medicamentos */}
        <View style={styles.medicamentosContainer}>
          <View style={styles.medHeaderRow}>
            <View style={styles.medTitleBox}>
              <View style={styles.medIconBox}>
                <Feather name="activity" size={16} color="#2E7D32" />
              </View>
              <View>
                <Text style={styles.medTitle}>Mis Medicamentos</Text>
                <Text style={styles.medSubtitle}>Programa del día</Text>
              </View>
            </View>
            <View style={styles.medCountBadge}>
              <Text style={styles.medCountText}>0/0 tomados</Text>
            </View>
          </View>

          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: '0%' }]} />
          </View>

          <TouchableOpacity style={styles.addMedButton} onPress={() => setModalMedVisible(true)}>
            <Text style={styles.addMedButtonText}>+ Agregar Medicamento</Text>
          </TouchableOpacity>

          {/* Estado vacío de medicamentos */}
          {medicamentosList.length === 0 ? (
            <View style={{ padding: 20, alignItems: 'center' }}>
              <Text style={{ fontSize: 12, color: '#9AA098', fontStyle: 'italic', textAlign: 'center' }}>
                No hay medicamentos registrados en tu horario.
              </Text>
            </View>
          ) : (
            medicamentosList.map((med) => (
              <View key={med.id} style={styles.medItemCard}>
                <View>
                  <Text style={styles.medItemName}>{med.nombre}</Text>
                  <Text style={styles.medItemDose}>{med.dosis}</Text>
                </View>
                <Feather name={med.tomado ? "check-circle" : "circle"} size={18} color={med.tomado ? "#2E7D32" : "#9AA098"} />
              </View>
            ))
          )}
        </View>

      </ScrollView>

      {/* Modal Nueva Cita */}
      <Modal animationType="slide" transparent={true} visible={modalCitaVisible} onRequestClose={() => setModalCitaVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeaderRow}>
              <View>
                <Text style={styles.modalTitle}>Nueva Cita</Text>
                <Text style={styles.modalSubtitle}>Ingresa los datos requeridos</Text>
              </View>
              <TouchableOpacity style={styles.closeModalBtn} onPress={() => setModalCitaVisible(false)}>
                <Feather name="x" size={16} color="#1E3A2B" />
              </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 12, fontWeight: '700', color: '#1E3A2B', marginBottom: 6 }}>Especialidad o Médico</Text>
            <View style={styles.inputBoxModal}>
              <Feather name="user" size={16} color="#828B84" />
              <TextInput placeholder="ej. Cardiología, Dra. García..." placeholderTextColor="#A0A5A0" style={styles.modalInputText} />
            </View>

            <Text style={{ fontSize: 12, fontWeight: '700', color: '#1E3A2B', marginBottom: 6, marginTop: 6 }}>Hora de la Cita</Text>
            <View style={styles.inputBoxModal}>
              <Feather name="clock" size={16} color="#828B84" />
              <TextInput placeholder="09:00 a.m." placeholderTextColor="#A0A5A0" style={styles.modalInputText} />
            </View>

            <View style={styles.modalButtonsRow}>
              <TouchableOpacity style={styles.cancelModalBtn} onPress={() => setModalCitaVisible(false)}>
                <Text style={styles.cancelModalBtnText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveModalBtn} onPress={() => setModalCitaVisible(false)}>
                <Text style={styles.saveModalBtnText}>Guardar Cita</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal Agregar Medicamento */}
      <Modal animationType="slide" transparent={true} visible={modalMedVisible} onRequestClose={() => setModalMedVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeaderRow}>
              <View>
                <Text style={styles.modalTitle}>Agregar Medicamento</Text>
                <Text style={styles.modalSubtitle}>Programa tu dosis diaria</Text>
              </View>
              <TouchableOpacity style={styles.closeModalBtn} onPress={() => setModalMedVisible(false)}>
                <Feather name="x" size={16} color="#1E3A2B" />
              </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 12, fontWeight: '700', color: '#1E3A2B', marginBottom: 6 }}>Nombre del medicamento</Text>
            <View style={styles.inputBoxModal}>
              <Feather name="activity" size={16} color="#828B84" />
              <TextInput placeholder="ej. Nombre del fármaco" placeholderTextColor="#A0A5A0" style={styles.modalInputText} />
            </View>

            <Text style={{ fontSize: 12, fontWeight: '700', color: '#1E3A2B', marginBottom: 6, marginTop: 6 }}>Dosis</Text>
            <View style={styles.inputBoxModal}>
              <Feather name="droplet" size={16} color="#828B84" />
              <TextInput placeholder="ej. 500mg / 1 tableta" placeholderTextColor="#A0A5A0" style={styles.modalInputText} />
            </View>

            <Text style={{ fontSize: 12, fontWeight: '700', color: '#1E3A2B', marginBottom: 6, marginTop: 6 }}>Hora</Text>
            <View style={styles.inputBoxModal}>
              <Feather name="clock" size={16} color="#828B84" />
              <TextInput placeholder="ej. 08:00 a.m." placeholderTextColor="#A0A5A0" style={styles.modalInputText} />
            </View>

            <View style={styles.modalButtonsRow}>
              <TouchableOpacity style={styles.cancelModalBtn} onPress={() => setModalMedVisible(false)}>
                <Text style={styles.cancelModalBtnText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveModalBtn} onPress={() => setModalMedVisible(false)}>
                <Text style={styles.saveModalBtnText}>Guardar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
}