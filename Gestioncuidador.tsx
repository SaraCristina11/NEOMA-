import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Gestioncuidador as styles } from './styles/Gestioncuidador';

interface GestionProps {
    onNavigate?: (screen: string) => void;
    onLogout?: () => void;
}

export default function DashboardGestionScreen({ onNavigate, onLogout }: GestionProps) {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    // Estados para los Modales de "Agregar"
    const [modalType, setModalType] = useState<'cita' | 'medicamento' | 'orden' | 'laboratorio' | null>(null);

    // Estado del Paciente Enlazado (Vacío a la espera del backend)
    const [pacienteData] = useState({
        nombre: 'Sin paciente vinculado',
        estadoSincronizacion: 'Desconectado',
    });

    return (
        <View style={styles.container}>

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

                {/* Menú Flotante de Notificaciones */}
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
                            <Text style={styles.emptyNotificationText}>Sin notificaciones nuevas</Text>
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

                {/* Títulos de la Sección */}
                <Text style={styles.greetingDate}>GESTIÓN DE SALUD</Text>
                <Text style={styles.greetingTitle}>Agenda Médica</Text>
                <Text style={styles.greetingSub}>Consulta, agrega y actualiza la información médica.</Text>

                {/* Módulos de Gestión (Grid de 2x2 con estados vacíos / carga) */}
                <View style={styles.modulesGrid}>

                    {/* Módulo: Mis Citas */}
                    <View style={styles.moduleCard}>
                        <View style={styles.moduleHeader}>
                            <View style={styles.moduleIconBoxCita}>
                                <Feather name="calendar" size={18} color="#1E3A2B" />
                            </View>
                            <TouchableOpacity style={styles.arrowButton}>
                                <Feather name="chevron-right" size={16} color="#828B84" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.moduleTitle}>Mis Citas</Text>
                        <Text style={styles.moduleSub}>Cargando información...</Text>

                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => setModalType('cita')}
                            activeOpacity={0.8}
                        >
                            <Feather name="plus" size={14} color="#1E3A2B" />
                            <Text style={styles.addButtonText}>Agregar</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Módulo: Medicamentos */}
                    <View style={styles.moduleCard}>
                        <View style={styles.moduleHeader}>
                            <View style={styles.moduleIconBoxMed}>
                                <Ionicons name="medical" size={18} color="#6C5CE7" />
                            </View>
                            <TouchableOpacity style={styles.arrowButton}>
                                <Feather name="chevron-right" size={16} color="#828B84" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.moduleTitle}>Medicamentos</Text>
                        <Text style={styles.moduleSub}>Cargando información...</Text>

                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => setModalType('medicamento')}
                            activeOpacity={0.8}
                        >
                            <Feather name="plus" size={14} color="#1E3A2B" />
                            <Text style={styles.addButtonText}>Agregar</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Módulo: Órdenes */}
                    <View style={styles.moduleCard}>
                        <View style={styles.moduleHeader}>
                            <View style={styles.moduleIconBoxOrden}>
                                <Feather name="file-text" size={18} color="#D97706" />
                            </View>
                            <TouchableOpacity style={styles.arrowButton}>
                                <Feather name="chevron-right" size={16} color="#828B84" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.moduleTitle}>Órdenes</Text>
                        <Text style={styles.moduleSub}>Cargando información...</Text>

                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => setModalType('orden')}
                            activeOpacity={0.8}
                        >
                            <Feather name="plus" size={14} color="#1E3A2B" />
                            <Text style={styles.addButtonText}>Agregar</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Módulo: Laboratorios */}
                    <View style={styles.moduleCard}>
                        <View style={styles.moduleHeader}>
                            <View style={styles.moduleIconBoxLab}>
                                <Feather name="activity" size={18} color="#2563EB" />
                            </View>
                            <TouchableOpacity style={styles.arrowButton}>
                                <Feather name="chevron-right" size={16} color="#828B84" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.moduleTitle}>Laboratorios</Text>
                        <Text style={styles.moduleSub}>Cargando información...</Text>

                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => setModalType('laboratorio')}
                            activeOpacity={0.8}
                        >
                            <Feather name="plus" size={14} color="#1E3A2B" />
                            <Text style={styles.addButtonText}>Agregar</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                {/* Estado de Sincronización Inferior */}
                <View style={styles.syncStatusCard}>
                    <Feather name="check-circle" size={16} color="#1E3A2B" />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.syncStatusTitle}>A la espera de enlace</Text>
                        <Text style={styles.syncStatusDesc}>Los cambios se reflejarán al instante al sincronizar el paciente.</Text>
                    </View>
                </View>

            </ScrollView>

            {/* MODALES DINÁMICOS */}
            <Modal visible={modalType !== null} transparent animationType="slide">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>

                        <View style={styles.modalIndicatorBar} />

                        <View style={styles.modalHeaderRow}>
                            <View>
                                <Text style={styles.modalCategoryPre}>
                                    {modalType === 'cita' && 'AGREGAR A MIS CITAS'}
                                    {modalType === 'medicamento' && 'AGREGAR A MEDICAMENTOS'}
                                    {modalType === 'orden' && 'AGREGAR A ÓRDENES'}
                                    {modalType === 'laboratorio' && 'AGREGAR A LABORATORIOS'}
                                </Text>
                                <Text style={styles.modalMainTitle}>
                                    {modalType === 'cita' && 'Nueva cita'}
                                    {modalType === 'medicamento' && 'Nuevo medicamento'}
                                    {modalType === 'orden' && 'Nueva orden médica'}
                                    {modalType === 'laboratorio' && 'Nuevo resultado'}
                                </Text>
                            </View>

                            <TouchableOpacity style={styles.modalCloseBtn} onPress={() => setModalType(null)}>
                                <Feather name="x" size={16} color="#1E3A2B" />
                            </TouchableOpacity>
                        </View>

                        {modalType === 'cita' && (
                            <>
                                <Text style={styles.inputLabel}>Especialidad</Text>
                                <TextInput style={styles.textInput} placeholder="Ej. Cardiología" placeholderTextColor="#9AA098" />
                                <Text style={styles.inputLabel}>Fecha</Text>
                                <TextInput style={styles.textInput} placeholder="12/06/2026" placeholderTextColor="#9AA098" />
                                <Text style={styles.inputLabel}>Lugar</Text>
                                <TextInput style={styles.textInput} placeholder="Clínica o consultorio" placeholderTextColor="#9AA098" />
                            </>
                        )}

                        {modalType === 'medicamento' && (
                            <>
                                <Text style={styles.inputLabel}>Nombre del medicamento</Text>
                                <TextInput style={styles.textInput} placeholder="Ej. Losartán" placeholderTextColor="#9AA098" />
                                <Text style={styles.inputLabel}>Dosis</Text>
                                <TextInput style={styles.textInput} placeholder="Ej. 50 mg" placeholderTextColor="#9AA098" />
                                <Text style={styles.inputLabel}>Frecuencia</Text>
                                <TextInput style={styles.textInput} placeholder="Ej. Cada 24 horas" placeholderTextColor="#9AA098" />
                            </>
                        )}

                        {(modalType === 'orden' || modalType === 'laboratorio') && (
                            <>
                                <Text style={styles.inputLabel}>Nombre del documento</Text>
                                <TextInput style={styles.textInput} placeholder="Ej. Ecocardiograma / Hemograma" placeholderTextColor="#9AA098" />
                                <Text style={styles.inputLabel}>Seleccionar archivo</Text>
                                <TextInput style={styles.textInput} placeholder="Seleccionar archivo. Ningún archivo seleccionado" placeholderTextColor="#9AA098" />
                            </>
                        )}

                        <TouchableOpacity style={styles.modalSaveButton} activeOpacity={0.8} onPress={() => setModalType(null)}>
                            <Text style={styles.modalSaveButtonText}>Guardar y sincronizar</Text>
                            <Feather name="check" size={16} color="#FFFFFF" />
                        </TouchableOpacity>

                        <Text style={styles.modalFooterNote}>✓ Se añadirá automáticamente al perfil del paciente</Text>

                    </View>
                </View>
            </Modal>

            {/* FOOTER FIJO CON BARRA DE NAVEGACIÓN */}
            <View style={styles.fixedBottomFooter}>
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

                <View style={styles.navDivider} />

                <View style={styles.bottomNavRow}>
                    {[
                        { key: 'inicio', label: 'Inicio', icon: 'home' },
                        { key: 'gestion', label: 'Gestión', icon: 'grid' },
                        { key: 'perfil_cuidador', label: 'Perfil', icon: 'user' },
                    ].map((tab) => (
                        <TouchableOpacity
                            key={tab.key}
                            style={styles.bottomNavItem}
                            onPress={() => {
                                if (tab.key === 'inicio') {
                                    if (onNavigate) onNavigate('dashboard');
                                } else if (tab.key === 'perfil_cuidador') {
                                    if (onNavigate) onNavigate('perfil_cuidador');
                                } else if (tab.key === 'gestion') {
                                    // Ya te encuentras en gestión
                                }
                            }}
                        >
                            <Feather
                                name={tab.icon as any}
                                size={22}
                                color={tab.key === 'gestion' ? '#1E3A2B' : '#828B84'}
                            />
                            <Text style={[
                                styles.bottomNavText,
                                tab.key === 'gestion' && styles.bottomNavTextActive
                            ]}>
                                {tab.label}
                            </Text>
                            {tab.key === 'gestion' && <View style={styles.activeDot} />}
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

        </View>
    );
}