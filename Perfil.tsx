// PerfilScreen.tsx
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { perfilStyles as styles } from './styles/Perfil';

// 1. Añadimos onLogout a las props del componente
export default function PerfilScreen({ navigation, onLogout }: any) {
    const [profileData] = useState({
        nombreCompleto: '---',
        documento: '---',
        edad: '--',
        genero: '---',
        tipoSangre: '---',
        fechaNacimiento: '---',
        correo: '---',
        celular: '---',
        estado: '---',
    });

    // ESTADOS INTERACTIVOS
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [tempNombre, setTempNombre] = useState(profileData.nombreCompleto);

    const [isAntecedentesOpen, setIsAntecedentesOpen] = useState(false);
    const [cuidadorData, setCuidadorData] = useState<null | {
        nombre: string;
        parentesco: string;
        telefono: string;
        tipoAcceso: string;
        vinculadoDesde: string;
    }>(null);
    const [isCuidadorOpen, setIsCuidadorOpen] = useState(false);

    // 2. Función para manejar el cierre de sesión conectado a App.tsx
    const handleConfirmLogout = () => {
        setIsLogoutModalOpen(false);
        if (onLogout) {
            onLogout(); // Cambia el estado en App.tsx para volver al login
        } else if (navigation && navigation.replace) {
            navigation.replace('login');
        }
    };

    return (
        <View style={styles.perfilContainer}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {/* Cabecera Superior */}
                <View style={styles.headerRow}>
                    <View style={styles.brandRow}>
                        <View style={styles.logoBadge}>
                            <Ionicons name="heart" size={16} color="#FFFFFF" />
                        </View>
                        <Text style={styles.brandName}>NEOMA</Text>
                    </View>

                    <View style={styles.headerActions}>
                        {/* Botón de Salir con Icono Rojo */}
                        <TouchableOpacity
                            style={styles.logoutActionBtn}
                            onPress={() => setIsLogoutModalOpen(true)}
                            activeOpacity={0.8}
                        >
                            <Feather name="log-out" size={16} color="#D9534F" />
                        </TouchableOpacity>

                        {/* Botón Dinámico EDITAR / CANCELAR */}
                        <TouchableOpacity
                            style={isEditing ? styles.cancelBtn : styles.editBtn}
                            onPress={() => setIsEditing(!isEditing)}
                            activeOpacity={0.8}
                        >
                            <Feather name={isEditing ? "x" : "edit-3"} size={14} color={isEditing ? "#1E3A2B" : "#FFFFFF"} />
                            <Text style={isEditing ? styles.cancelBtnText : styles.editBtnText}>
                                {isEditing ? "CANCELAR" : "EDITAR"}
                            </Text>
                        </TouchableOpacity>

                        {/* Botón de Notificaciones */}
                        <TouchableOpacity
                            style={styles.notificationBtn}
                            onPress={() => setIsNotificationOpen(!isNotificationOpen)}
                            activeOpacity={0.8}
                        >
                            <Feather name="bell" size={18} color="#1E3A2B" />
                            <View style={styles.redDot} />
                        </TouchableOpacity>
                    </View>
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

                {/* Tarjeta Hero de Perfil */}
                <View style={styles.profileHeroCard}>
                    <View style={[styles.avatarContainer, { justifyContent: 'center', alignItems: 'center', backgroundColor: '#2A4D3B' }]}>
                        <Feather name="user" size={36} color="#A7D7B5" />
                    </View>

                    {isEditing ? (
                        <TextInput
                            style={styles.nameInput}
                            value={tempNombre}
                            onChangeText={setTempNombre}
                            placeholder="Ingrese su nombre"
                            placeholderTextColor="#A7D7B5"
                            autoFocus
                        />
                    ) : (
                        <Text style={styles.profileName}>
                            {tempNombre === '---' ? 'A la espera de datos...' : tempNombre}
                        </Text>
                    )}

                    <Text style={styles.profileMeta}>
                        ID: -- • Edad: -- • Género: --
                    </Text>

                    <View style={styles.chipsRow}>
                        <View style={styles.statusChip}>
                            <Text style={styles.statusChipText}>⚪ Estado: {profileData.estado}</Text>
                        </View>
                        <View style={styles.bloodChip}>
                            <Text style={styles.bloodChipText}>🩸 Sangre: --</Text>
                        </View>
                    </View>
                </View>

                {/* Sección Información Personal - Vacía */}
                <View style={styles.sectionCard}>
                    <View style={styles.sectionTitleRow}>
                        <Feather name="user" size={16} color="#1E3A2B" />
                        <Text style={styles.sectionTitleText}>Información Personal</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Nombre completo</Text>
                        <Text style={styles.infoValue}>--</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Número de documento</Text>
                        <Text style={styles.infoValue}>--</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Edad</Text>
                        <Text style={styles.infoValue}>--</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Género</Text>
                        <Text style={styles.infoValue}>--</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Tipo de sangre</Text>
                        <Text style={styles.infoValue}>--</Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Fecha de nacimiento</Text>
                        <Text style={styles.infoValue}>--</Text>
                    </View>

                    <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
                        <Text style={styles.infoLabel}>Correo Electrónico</Text>
                        <Text style={styles.infoValue}>--</Text>
                    </View>

                    <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
                        <Text style={styles.infoLabel}>Número de Celular</Text>
                        <Text style={styles.infoValue}>{profileData.celular}</Text>
                    </View>
                </View>

                {/* Tarjeta Desplegable: Antecedentes Clínicos */}
                <View style={styles.antecedentesCardWrapper}>
                    <TouchableOpacity
                        style={styles.antecedentesHeader}
                        onPress={() => setIsAntecedentesOpen(!isAntecedentesOpen)}
                        activeOpacity={0.8}
                    >
                        <View style={styles.navCardLeft}>
                            <View style={styles.navIconCircle}>
                                <Feather name="activity" size={16} color="#1E3A2B" />
                            </View>
                            <Text style={styles.navCardTitle}>Antecedentes Clínicos</Text>
                        </View>
                        <Feather name={isAntecedentesOpen ? "chevron-up" : "chevron-down"}
                            size={18}
                            color="#828B84"
                        />
                    </TouchableOpacity>

                    {isAntecedentesOpen && (
                        <View style={styles.antecedentesBody}>
                            <Text style={styles.subSectionTitle}>ENFERMEDADES CRÓNICAS</Text>
                            <View style={styles.emptyRecordBox}>
                                <Text style={styles.emptyRecordText}>Sin registro</Text>
                            </View>

                            <Text style={styles.subSectionTitle}>ALERGIAS CONOCIDAS</Text>
                            <View style={styles.emptyRecordBox}>
                                <Text style={styles.emptyRecordText}>Sin registro</Text>
                            </View>
                        </View>
                    )}
                </View>

                {/* Tarjeta Desplegable: Cuidador Conectado */}
                <View style={styles.antecedentesCardWrapper}>
                    <TouchableOpacity
                        style={styles.antecedentesHeader}
                        onPress={() => setIsCuidadorOpen(!isCuidadorOpen)}
                        activeOpacity={0.8}
                    >
                        <View style={styles.navCardLeft}>
                            <View style={styles.navIconCircle}>
                                <Feather name="heart" size={16} color="#1E3A2B" />
                            </View>
                            <Text style={styles.navCardTitle}>Cuidador Conectado</Text>
                        </View>
                        <View style={styles.navCardRight}>
                            <View style={[styles.statusDotGreen, { backgroundColor: cuidadorData ? '#4CAF50' : '#B0BEC5' }]} />
                            <Feather
                                name={isCuidadorOpen ? "chevron-up" : "chevron-down"}
                                size={18}
                                color="#828B84"
                            />
                        </View>
                    </TouchableOpacity>

                    {isCuidadorOpen && (
                        <View style={styles.antecedentesBody}>
                            {cuidadorData ? (
                                <View style={{ backgroundColor: '#F4F7F4', borderRadius: 16, padding: 12, borderWidth: 1, borderColor: '#D2E3D4' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12, gap: 10 }}>
                                        <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#1E3A2B', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ color: '#FFFFFF', fontWeight: '800', fontSize: 12 }}>MR</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontSize: 14, fontWeight: '800', color: '#1E3A2B' }}>{cuidadorData.nombre}</Text>
                                            <Text style={{ fontSize: 11, color: '#828B84' }}>{cuidadorData.parentesco}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.infoRow}>
                                        <Text style={styles.infoLabel}>Teléfono</Text>
                                        <Text style={styles.infoValue}>{cuidadorData.telefono}</Text>
                                    </View>
                                    <View style={styles.infoRow}>
                                        <Text style={styles.infoLabel}>Tipo de acceso</Text>
                                        <Text style={styles.infoValue}>{cuidadorData.tipoAcceso}</Text>
                                    </View>
                                    <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
                                        <Text style={styles.infoLabel}>Vinculado desde</Text>
                                        <Text style={styles.infoValue}>{cuidadorData.vinculadoDesde}</Text>
                                    </View>
                                </View>
                            ) : (
                                <View>
                                    <Text style={styles.subSectionTitle}>ESTADO DEL VÍNCULO</Text>
                                    <View style={styles.emptyRecordBox}>
                                        <Text style={styles.emptyRecordText}>Cuidador no registrado o enlazado</Text>
                                    </View>
                                </View>
                            )}
                        </View>
                    )}
                </View>

            </ScrollView>

            {/* Acciones de Emergencia Fijas */}
            <View style={styles.fixedEmergencyContainer}>
                <Text style={styles.emergencySectionTitle}>ACCIONES DE EMERGENCIA</Text>

                <View style={styles.emergencyButtonsGrid}>
                    <TouchableOpacity style={styles.emergencyBtnRed}>
                        <Feather name="phone-call" size={18} color="#FFFFFF" />
                        <Text style={styles.emergencyBtnText}>LLAMAR EMERGENCIAS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.emergencyBtnGreen}>
                        <Feather name="phone-call" size={18} color="#FFFFFF" />
                        <Text style={styles.emergencyBtnText}>CONTACTAR CUIDADOR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.emergencyBtnPurple}>
                        <Feather name="phone-call" size={18} color="#FFFFFF" />
                        <Text style={styles.emergencyBtnText}>LLAMAR A LA EPS</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* MODAL DE CONFIRMACIÓN DE CIERRE DE SESIÓN */}
            <Modal
                transparent={true}
                visible={isLogoutModalOpen}
                animationType="fade"
                onRequestClose={() => setIsLogoutModalOpen(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalCard}>
                        <View style={styles.modalIconCircle}>
                            <Feather name="log-out" size={22} color="#D9534F" />
                        </View>

                        <Text style={styles.modalTitle}>Cerrar Sesión</Text>
                        <Text style={styles.modalSubtitle}>¿Estás seguro que quieres cerrar sesión?</Text>

                        <View style={styles.modalActionsRow}>
                            <TouchableOpacity
                                style={styles.modalBtnNo}
                                onPress={() => setIsLogoutModalOpen(false)}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.modalBtnNoText}>No</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.modalBtnYes}
                                onPress={handleConfirmLogout}
                                activeOpacity={0.8}
                            >
                                <Feather name="log-out" size={14} color="#FFFFFF" />
                                <Text style={styles.modalBtnYesText}>Sí, salir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}