import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { dashboardCuidadorStyles as styles } from './styles/DashboardCuidador';
import Perfil from './Perfil';

interface CuidadorProps {
  onLogout?: () => void;
}

export default function DashboardCuidadorScreen({ onLogout }: CuidadorProps) {
  const [activeTab, setActiveTab] = useState<'inicio' | 'perfil'>('inicio');
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // ESTADOS VACÍOS (A la espera del Backend / Paciente Vinculado)
  const [pacienteData] = useState({
    nombre: 'Sin paciente vinculado',
    estadoSincronizacion: 'Desconectado',
  });

  const [vitals] = useState({
    presion: { valor: '--/--', estado: 'Esperando', unidad: 'mmHg' },
    ritmoCardiaco: { valor: '--', estado: 'Esperando', unidad: 'bpm' },
    temperatura: { valor: '--', estado: 'Esperando', unidad: '°C' },
    saturacion: { valor: '--', estado: 'Esperando', unidad: '%' },
  });

  return (
    <View style={styles.container}>
      
      {/* PESTAÑA INICIO DE CUIDADOR */}
      {activeTab === 'inicio' ? (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* Header Superior */}
          <View style={styles.headerRow}>
            <View style={styles.brandRow}>
              <View style={styles.logoBadge}>
                <Ionicons name="heart" size={16} color="#FFFFFF" />
              </View>
              <Text style={styles.brandName}>NEOMA</Text>
            </View>

            <TouchableOpacity 
              style={styles.notificationBtn}
              onPress={() => setIsNotificationOpen(!isNotificationOpen)}
              activeOpacity={0.8}
            >
              <Feather name="bell" size={18} color="#FFFFFF" />
              <View style={styles.redBadgeDot} />
            </TouchableOpacity>
          </View>

          {/* MENÚ FLOTANTE DE NOTIFICACIONES */}
          {isNotificationOpen && (
            <View style={styles.notificationPopover}>
              <View style={styles.notificationHeaderRow}>
                <Text style={styles.notificationTitle}>Notificaciones</Text>
                <TouchableOpacity onPress={() => setIsNotificationOpen(false)}>
                  <Feather name="x" size={14} color="#828B84" />
                </TouchableOpacity>
              </View>

              <View style={styles.emptyNotificationBox}>
                <Feather name="bell-off" size={16} color="#828B84" />
                <Text style={styles.emptyNotificationText}>Sin notificaciones</Text>
              </View>
            </View>
          )}

          {/* Tarjeta Superior: Paciente Enlazado */}
          <View style={styles.patientBannerCard}>
            <View style={styles.patientBannerLeft}>
              <View style={styles.patientAvatarCircle}>
                <Feather name="user" size={24} color="#A7D7B5" />
              </View>
              <View>
                <Text style={styles.patientBannerSub}>CUIDANDO A</Text>
                <Text style={styles.patientBannerName}>{pacienteData.nombre}</Text>
              </View>
            </View>
            <View style={styles.syncBadgeRow}>
              <View style={styles.syncGreenDot} />
              <Text style={styles.syncText}>{pacienteData.estadoSincronizacion}</Text>
            </View>
          </View>

          {/* Saludo */}
          <Text style={styles.greetingDate}>PANEL DE SUPERVISIÓN</Text>
          <Text style={styles.greetingTitle}>Buenos días</Text>

          <Text style={styles.sectionTitle}>SALUD EN TIEMPO REAL • SIGNOS VITALES</Text>

          {/* Signos Vitales */}
          <View style={styles.vitalsGrid}>
            <View style={styles.vitalCardDark}>
              <View style={styles.vitalHeader}>
                <View style={styles.vitalIconCircle}>
                  <Feather name="activity" size={16} color="#A7D7B5" />
                </View>
                <View style={styles.vitalStatusChip}>
                  <Text style={styles.vitalStatusText}>{vitals.presion.estado}</Text>
                </View>
              </View>
              <Text style={styles.vitalValueLight}>
                {vitals.presion.valor} <Text style={styles.vitalUnitLight}>{vitals.presion.unidad}</Text>
              </Text>
              <Text style={styles.vitalNameLight}>Presión arterial</Text>
            </View>

            <View style={styles.vitalCard}>
              <View style={styles.vitalHeader}>
                <View style={styles.vitalIconCircle}>
                  <Feather name="heart" size={16} color="#D9534F" />
                </View>
                <View style={styles.vitalStatusChip}>
                  <Text style={styles.vitalStatusText}>{vitals.ritmoCardiaco.estado}</Text>
                </View>
              </View>
              <Text style={styles.vitalValue}>
                {vitals.ritmoCardiaco.valor} <Text style={styles.vitalUnit}>{vitals.ritmoCardiaco.unidad}</Text>
              </Text>
              <Text style={styles.vitalName}>Ritmo cardíaco</Text>
            </View>

            <View style={styles.vitalCard}>
              <View style={styles.vitalHeader}>
                <View style={styles.vitalIconCircle}>
                  <Feather name="thermometer" size={16} color="#E67E22" />
                </View>
                <View style={styles.vitalStatusChip}>
                  <Text style={styles.vitalStatusText}>{vitals.temperatura.estado}</Text>
                </View>
              </View>
              <Text style={styles.vitalValue}>
                {vitals.temperatura.valor} <Text style={styles.vitalUnit}>{vitals.temperatura.unidad}</Text>
              </Text>
              <Text style={styles.vitalName}>Temperatura</Text>
            </View>

            <View style={styles.vitalCard}>
              <View style={styles.vitalHeader}>
                <View style={styles.vitalIconCircle}>
                  <Feather name="droplet" size={16} color="#3498DB" />
                </View>
                <View style={styles.vitalStatusChip}>
                  <Text style={styles.vitalStatusText}>{vitals.saturacion.estado}</Text>
                </View>
              </View>
              <Text style={styles.vitalValue}>
                {vitals.saturacion.valor} <Text style={styles.vitalUnit}>{vitals.saturacion.unidad}</Text>
              </Text>
              <Text style={styles.vitalName}>Saturación O₂</Text>
            </View>
          </View>

          {/* Tarjeta Verde de Recomendaciones de IA */}
          <View style={styles.aiRecommendationCard}>
            <View style={styles.aiHeaderRow}>
              <View style={styles.aiIconBadge}>
                <Ionicons name="sparkles" size={18} color="#1E3A2B" />
              </View>
              <View>
                <Text style={styles.aiSubtitle}>NEOMA INTELIGENCIA</Text>
                <Text style={styles.aiHeaderTitle}>Recomendaciones de la IA</Text>
              </View>
            </View>
            
            <View style={styles.emptyStateBox}>
              <Feather name="cpu" size={16} color="#828B84" />
              <Text style={styles.emptyStateText}>
                Sin registros suficientes para mostrar sugerencias inteligentes.
              </Text>
            </View>
          </View>

          {/* Alertas y Novedades */}
          <Text style={styles.sectionTitle}>ALERTAS Y NOVEDADES</Text>
          <View style={styles.alertsCard}>
            <View style={styles.emptyStateBox}>
              <Feather name="bell-off" size={16} color="#828B84" />
              <Text style={styles.emptyStateText}>
                Sin alertas o novedades recientes registradas.
              </Text>
            </View>
          </View>

        </ScrollView>
      ) : (
        <Perfil onLogout={onLogout} />
      )}

      {/* FOOTER FIJO QUE OCUPA TODO EL ANCHO (Botones + Navegación) */}
      <View style={styles.fixedBottomFooter}>
        
        {/* Fila de Botones de Emergencia */}
        <View style={styles.emergencyRow}>
          <TouchableOpacity style={styles.emergencyBtnRed} activeOpacity={0.8}>
            <View style={styles.emergencyIconBox}>
              <Feather name="phone-call" size={16} color="#FFFFFF" />
            </View>
            <Text style={styles.emergencyBtnText}>EMERGENCIAS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.emergencyBtnPurple} activeOpacity={0.8}>
            <View style={styles.emergencyIconBox}>
              <Ionicons name="shield-checkmark" size={16} color="#FFFFFF" />
            </View>
            <Text style={styles.emergencyBtnText}>LLAMAR EPS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.emergencyBtnGreen} activeOpacity={0.8}>
            <View style={styles.emergencyIconBox}>
              <Feather name="crosshair" size={16} color="#FFFFFF" />
            </View>
            <Text style={styles.emergencyBtnText}>UBICACIÓN</Text>
          </TouchableOpacity>
        </View>

        {/* Separador sutil */}
        <View style={styles.navDivider} />

        {/* Barra de Pestañas Inferior */}
        <View style={styles.bottomNavRow}>
          {[
            { key: 'inicio', label: 'Inicio', icon: 'home' },
          ].map((tab) => (
            <TouchableOpacity 
              key={tab.key} 
              style={styles.bottomNavItem} 
              onPress={() => setActiveTab(tab.key as any)}
            >
              <Feather 
                name={tab.icon as any} 
                size={22} 
                color={activeTab === tab.key ? '#1E3A2B' : '#828B84'} 
              />
              <Text style={[
                styles.bottomNavText, 
                activeTab === tab.key && styles.bottomNavTextActive
              ]}>
                {tab.label}
              </Text>
              {activeTab === tab.key && <View style={styles.activeDot} />}
            </TouchableOpacity>
          ))}
        </View>

      </View>

    </View>
  );
}