import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { perfilStyles as styles } from './styles/Perfilcuidador';

interface PerfilCuidadorProps {
  onNavigate?: (screen: string) => void;
  onLogout?: () => void;
}

export default function Perfilcuidador({ onNavigate, onLogout }: PerfilCuidadorProps) {
  // ESTADOS VACÍOS (Listos para recibir la información real del backend)
  const [cuidadorData] = useState({
    iniciales: '--',
    nombre: 'Sin nombre registrado',
    rol: 'Cuidador principal',
    estado: 'Desconectado',
    documento: '---',
    correo: '---',
    telefono: '---',
  });

  const [pacienteVinculado] = useState({
    nombre: 'Ningún paciente vinculado',
    documento: '---',
    edad: '--',
    parentesco: '---',
    tipoSangre: '--',
    estadoSalud: 'Sin registrar',
    alergias: 'Ninguna registrada',
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* Header Superior del Paciente Enlazado */}
        <View style={styles.patientBannerCard}>
          <View style={styles.patientBannerLeft}>
            <View style={styles.patientAvatarCircle}>
              <Feather name="user" size={24} color="#A7D7B5" />
            </View>
            <View>
              <Text style={styles.patientBannerSub}>CUIDANDO A</Text>
              <Text style={styles.patientBannerName}>{pacienteVinculado.nombre}</Text>
            </View>
          </View>
          <View style={styles.syncBadgeRow}>
            <View style={[styles.syncGreenDot, { backgroundColor: '#E57373' }]} />
            <Text style={styles.syncText}>{cuidadorData.estado}</Text>
          </View>
        </View>

        {/* Título de la Sección y Botón Superior de Salida */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.sectionTitle}>MI CUENTA</Text>
            <Text style={styles.greetingTitle}>Perfil</Text>
            <Text style={{ fontSize: 13, color: '#828B84', marginBottom: 16 }}>Tu información y la de tu paciente vinculado.</Text>
          </View>

          {onLogout && (
            <TouchableOpacity 
              style={styles.topLogoutButton} 
              activeOpacity={0.8}
              onPress={onLogout}
            >
              <Feather name="log-out" size={18} color="#D9534F" />
            </TouchableOpacity>
          )}
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 4, marginBottom: 8 }}>
          <Text style={styles.sectionTitle}>DATOS DEL CUIDADOR</Text>
          <TouchableOpacity 
            style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}
            onPress={() => alert('Función de edición disponible con el backend')}
          >
            <Text style={{ fontSize: 13, fontWeight: '600', color: '#1E3A2B' }}>Editar</Text>
            <Feather name="chevron-right" size={14} color="#1E3A2B" />
          </TouchableOpacity>
        </View>

        {/* Tarjeta de Datos del Cuidador */}
        <View style={styles.sectionCard}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <View style={styles.avatarLargeCircle}>
                <Text style={{ fontSize: 16, fontWeight: '700', color: '#1E3A2B' }}>{cuidadorData.iniciales}</Text>
              </View>
              <View>
                <Text style={styles.profileName}>{cuidadorData.nombre}</Text>
                <Text style={{ fontSize: 12, color: '#828B84' }}>{cuidadorData.rol}</Text>
              </View>
            </View>
            <View style={{ backgroundColor: '#F2F4F2', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 12, flexDirection: 'row', alignItems: 'center', gap: 4 }}>
              <Feather name="clock" size={12} color="#828B84" />
              <Text style={{ fontSize: 11, fontWeight: '600', color: '#828B84' }}>Pendiente</Text>
            </View>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldLabel}>Documento</Text>
            <Text style={styles.fieldValue}>{cuidadorData.documento}</Text>
          </View>

          <View style={styles.fieldRow}>
            <Text style={styles.fieldLabel}>Correo electrónico</Text>
            <Text style={styles.fieldValue}>{cuidadorData.correo}</Text>
          </View>

          <View style={[styles.fieldRow, { borderBottomWidth: 0 }]}>
            <Text style={styles.fieldLabel}>Teléfono</Text>
            <Text style={styles.fieldValue}>{cuidadorData.telefono}</Text>
          </View>
        </View>

        {/* Sección: Paciente Vinculado */}
        <Text style={styles.sectionTitle}>ACCESO COMPLETO</Text>
        <Text style={{ fontSize: 16, fontWeight: '700', color: '#1E3A2B', marginBottom: 12 }}>Paciente vinculado</Text>

        <View style={styles.sectionCard}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16, gap: 12 }}>
            <View style={styles.avatarLargeCircle}>
              <Feather name="user" size={24} color="#828B84" />
            </View>
            <View>
              <Text style={styles.profileName}>{pacienteVinculado.nombre}</Text>
              <Text style={{ fontSize: 12, color: '#828B84' }}>Sin datos de identificación</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', gap: 10, marginBottom: 12 }}>
            <View style={{ flex: 1, backgroundColor: '#F9FBF9', padding: 12, borderRadius: 12, borderWidth: 1, borderColor: '#E2E8E0' }}>
              <Text style={{ fontSize: 10, color: '#828B84', fontWeight: '700', marginBottom: 4 }}>TIPO DE SANGRE</Text>
              <Text style={{ fontSize: 14, fontWeight: '700', color: '#828B84' }}>{pacienteVinculado.tipoSangre}</Text>
            </View>

            <View style={{ flex: 1, backgroundColor: '#F9FBF9', padding: 12, borderRadius: 12, borderWidth: 1, borderColor: '#E2E8E0' }}>
              <Text style={{ fontSize: 10, color: '#828B84', fontWeight: '700', marginBottom: 4 }}>ESTADO</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: '#828B84' }} />
                <Text style={{ fontSize: 13, fontWeight: '600', color: '#828B84' }}>{pacienteVinculado.estadoSalud}</Text>
              </View>
            </View>
          </View>

          {/* Alergias Principales */}
          <View style={{ backgroundColor: '#F9FBF9', padding: 12, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#E2E8E0' }}>
            <Text style={{ fontSize: 10, color: '#828B84', fontWeight: '700', marginBottom: 2 }}>ALERGIAS PRINCIPALES</Text>
            <Text style={{ fontSize: 13, fontWeight: '600', color: '#828B84' }}>{pacienteVinculado.alergias}</Text>
          </View>

          {/* Tarjetas de Acceso Rápido (Historia Clínica / Datos Médicos) */}
          <View style={styles.quickActionsGrid}>
            <TouchableOpacity style={styles.quickActionCard} activeOpacity={0.8} onPress={() => alert('Vincula un paciente para ver su historial...')}>
              <View style={styles.quickActionIconBox}>
                <Feather name="file-text" size={16} color="#828B84" />
              </View>
              <Text style={styles.quickActionSub}>REGISTRO COMPLETO</Text>
              <Text style={[styles.quickActionTitle, { color: '#828B84' }]}>Ver Historia Clínica</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickActionCard} activeOpacity={0.8} onPress={() => alert('Vincula un paciente para ver sus parámetros...')}>
              <View style={styles.quickActionIconBox}>
                <Feather name="activity" size={16} color="#828B84" />
              </View>
              <Text style={styles.quickActionSub}>PARÁMETROS Y SALUD</Text>
              <Text style={[styles.quickActionTitle, { color: '#828B84' }]}>Ver Datos Médicos</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Mensaje de Permisos Institucionales */}
        <View style={[styles.permissionsNoticeBox, { backgroundColor: '#F2F4F2', borderColor: '#E2E8E0' }]}>
          <Feather name="shield" size={16} color="#828B84" />
          <Text style={[styles.permissionsNoticeText, { color: '#828B84' }]}>
            Vincula un paciente para habilitar los permisos de supervisión y gestión médica.
          </Text>
        </View>

      </ScrollView>

      {/* FOOTER FIJO CON NAVEGACIÓN */}
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
            { key: 'perfil', label: 'Perfil', icon: 'user' },
          ].map((tab) => (
            <TouchableOpacity
              key={tab.key}
              style={styles.bottomNavItem}
              onPress={() => {
                if (tab.key === 'inicio') {
                  if (onNavigate) onNavigate('dashboard');
                } else if (tab.key === 'gestion') {
                  if (onNavigate) onNavigate('gestion_cuidador');
                } else {
                  // Ya estás en perfil
                }
              }}
            >
              <Feather
                name={tab.icon as any}
                size={22}
                color={tab.key === 'perfil' ? '#1E3A2B' : '#828B84'}
              />
              <Text style={[
                styles.bottomNavText,
                tab.key === 'perfil' && styles.bottomNavTextActive
              ]}>
                {tab.label}
              </Text>
              {tab.key === 'perfil' && <View style={styles.activeDarkDot} />}
            </TouchableOpacity>
          ))}
        </View>
      </View>

    </View>
  );
}