import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { dashboardStyles as styles } from './styles/Dashboard';
import AgendaScreen from './AgendaScreen'; // <--- 1. Importamos la Agenda

export default function DashboardScreen() {
  const [activeTab, setActiveTab] = useState<'inicio' | 'agenda' | 'historial' | 'perfil'>('inicio');

  // ESTADOS VACÍOS (A LA ESPERA DEL BACKEND)
  const [userData] = useState({
    nombre: '...',
    saludo: 'Hola',
    cuidadorNombre: 'Sin asignar',
    cuidadorEstado: 'Inactivo',
  });

  const [healthScore] = useState({
    score: '--',
    mensaje: 'Esperando datos de NEOMA IA',
    submensaje: 'Conecta tus dispositivos para generar tu puntaje de salud.',
    tendencia: 'Sin registros previos',
  });

  const [vitals] = useState({
    frecuenciaCardiaca: { valor: '--', estado: 'Esperando', unidad: 'bpm' },
    saturacion: { valor: '--', estado: 'Esperando', unidad: '%' },
    presion: { valor: '--/--', estado: 'Esperando', unidad: 'mmHg' },
    glucosa: { valor: '--', estado: 'Esperando', unidad: 'mg/dL' },
  });

  const [deviceInfo] = useState({
    nombre: 'Ningún dispositivo vinculado',
    bateria: '--%',
    sincronizacion: 'Sin sincronizar',
    estadoConexion: 'Desconectado',
  });

  const [insightsList] = useState<Array<any>>([]);

  return (
    <View style={styles.dashboardContainer}>
      
      {/* 2. CONDICIONAL SEGÚN LA PESTAÑA ACTIVA */}
      {activeTab === 'inicio' ? (
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
          
          {/* Header Superior */}
          <View style={styles.dashHeaderRow}>
            <View style={styles.dashBrandRow}>
              <View style={styles.dashLogoBadge}>
                <Ionicons name="heart" size={16} color="#FFFFFF" />
              </View>
              <Text style={styles.dashBrandName}>NEOMA</Text>
            </View>

            <TouchableOpacity style={styles.notificationCircleBtn}>
              <Feather name="bell" size={18} color="#1E3A2B" />
              <View style={styles.redBadgeDot} />
            </TouchableOpacity>
          </View>

          {/* Saludo y Avatar */}
          <View style={styles.greetingRow}>
            <View>
              <Text style={styles.greetingSub}>{userData.saludo}</Text>
              <Text style={styles.greetingTitle}>Hola, {userData.nombre} 👋</Text>
            </View>

            <View style={styles.caregiverAvatarBadge}>
              <View style={[styles.caregiverImage, { backgroundColor: '#E2E8E0' }]} />
              <View style={[styles.statusBadgeGreen, { backgroundColor: '#9AA098' }]}>
                <Text style={styles.statusBadgeText}>{userData.cuidadorEstado}</Text>
              </View>
              <Text style={styles.caregiverSubtext}>• {userData.cuidadorNombre}</Text>
            </View>
          </View>

          {/* Tarjeta SCORE IA */}
          <View style={styles.scoreCardGreen}>
            <View style={styles.scoreCircleBox}>
              <Text style={styles.scoreNumber}>{healthScore.score}</Text>
              <Text style={styles.scoreLabel}>SCORE IA</Text>
            </View>

            <View style={styles.scoreTextBox}>
              <View style={styles.iaTagRow}>
                <Ionicons name="sparkles" size={12} color="#A7D7B5" />
                <Text style={styles.iaTagText}>NEOMA IA</Text>
              </View>
              <Text style={styles.scoreMainTitle}>{healthScore.mensaje}</Text>
              <Text style={styles.scoreSubTitle}>{healthScore.submensaje}</Text>
              <View style={styles.trendRow}>
                <Feather name="activity" size={14} color="#A7D7B5" />
                <Text style={styles.trendText}>{healthScore.tendencia}</Text>
              </View>
            </View>
          </View>

          {/* Signos Vitales */}
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitleText}>Signos Vitales</Text>
            <Text style={styles.sectionSubtitleText}>Sincronización pendiente</Text>
          </View>

          <View style={styles.vitalsGrid}>
            <View style={styles.vitalCard}>
              <View style={styles.vitalHeader}>
                <View style={[styles.vitalIconCircle, { backgroundColor: '#F9FBF8' }]}>
                  <Feather name="heart" size={16} color="#9AA098" />
                </View>
                <View style={[styles.chipNormal, { backgroundColor: '#F4F7F4' }]}>
                  <Text style={[styles.chipNormalText, { color: '#626B64' }]}>{vitals.frecuenciaCardiaca.estado}</Text>
                </View>
              </View>
              <Text style={styles.vitalValue}>
                {vitals.frecuenciaCardiaca.valor} <Text style={styles.vitalUnit}>{vitals.frecuenciaCardiaca.unidad}</Text>
              </Text>
              <Text style={styles.vitalName}>Frec. Cardíaca</Text>
            </View>

            <View style={styles.vitalCard}>
              <View style={styles.vitalHeader}>
                <View style={[styles.vitalIconCircle, { backgroundColor: '#F9FBF8' }]}>
                  <Feather name="wind" size={16} color="#9AA098" />
                </View>
                <View style={[styles.chipOptimo, { backgroundColor: '#F4F7F4' }]}>
                  <Text style={[styles.chipOptimoText, { color: '#626B64' }]}>{vitals.saturacion.estado}</Text>
                </View>
              </View>
              <Text style={styles.vitalValue}>
                {vitals.saturacion.valor} <Text style={styles.vitalUnit}>{vitals.saturacion.unidad}</Text>
              </Text>
              <Text style={styles.vitalName}>Saturación O₂</Text>
            </View>

            <View style={styles.vitalCard}>
              <View style={styles.vitalHeader}>
                <View style={[styles.vitalIconCircle, { backgroundColor: '#F9FBF8' }]}>
                  <Feather name="activity" size={16} color="#9AA098" />
                </View>
                <View style={[styles.chipNormal, { backgroundColor: '#F4F7F4' }]}>
                  <Text style={[styles.chipNormalText, { color: '#626B64' }]}>{vitals.presion.estado}</Text>
                </View>
              </View>
              <Text style={styles.vitalValue}>
                {vitals.presion.valor} <Text style={styles.vitalUnit}>{vitals.presion.unidad}</Text>
              </Text>
              <Text style={styles.vitalName}>Presión Arterial</Text>
            </View>

            <View style={styles.vitalCard}>
              <View style={styles.vitalHeader}>
                <View style={[styles.vitalIconCircle, { backgroundColor: '#F9FBF8' }]}>
                  <Feather name="droplet" size={16} color="#9AA098" />
                </View>
                <View style={[styles.chipNormal, { backgroundColor: '#F4F7F4' }]}>
                  <Text style={[styles.chipNormalText, { color: '#626B64' }]}>{vitals.glucosa.estado}</Text>
                </View>
              </View>
              <Text style={styles.vitalValue}>
                {vitals.glucosa.valor} <Text style={styles.vitalUnit}>{vitals.glucosa.unidad}</Text>
              </Text>
              <Text style={styles.vitalName}>Glucosa</Text>
            </View>
          </View>

          {/* Tarjeta Gráfica Frecuencia Cardíaca */}
          <View style={styles.chartCardContainer}>
            <View style={styles.chartHeaderRow}>
              <View>
                <Text style={styles.chartTitle}>Frecuencia Cardíaca</Text>
                <Text style={styles.chartSubtitle}>Últimas 8 horas (Sin datos)</Text>
              </View>
              <View style={[styles.bpmChipBadge, { backgroundColor: '#F4F7F4' }]}>
                <Text style={[styles.bpmChipText, { color: '#626B64' }]}>-- bpm</Text>
              </View>
            </View>

            <View style={[styles.mockGraphBox, { justifyContent: 'center', alignItems: 'center', height: 70 }]}>
              <Text style={{ fontSize: 11, color: '#9AA098', fontStyle: 'italic' }}>
                A la espera de conexión con el dispositivo...
              </Text>
            </View>
          </View>

          {/* Banner Wearable */}
          <View style={[styles.deviceBanner, { backgroundColor: '#F4F7F4' }]}>
            <View style={[styles.deviceIconBox, { backgroundColor: '#D2DCD0' }]}>
              <Feather name="watch" size={18} color="#626B64" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.deviceName, { color: '#626B64' }]}>{deviceInfo.nombre}</Text>
              <Text style={styles.deviceSub}>Batería {deviceInfo.bateria} • {deviceInfo.sincronizacion}</Text>
            </View>
            <View style={styles.connectedBadge}>
              <View style={[styles.greenDot, { backgroundColor: '#9AA098' }]} />
              <Text style={[styles.connectedText, { color: '#626B64' }]}>{deviceInfo.estadoConexion}</Text>
            </View>
          </View>

          {/* Recomendaciones IA */}
          <View style={styles.insightsCardContainer}>
            <View style={styles.insightsHeader}>
              <View style={styles.insightsTitleRow}>
                <Ionicons name="sparkles" size={16} color="#FFFFFF" />
                <Text style={styles.insightsMainTitle}>Recomendaciones IA</Text>
              </View>
              <View style={styles.insightsBadge}>
                <Text style={styles.insightsBadgeText}>0 insights</Text>
              </View>
            </View>
            <Text style={styles.insightsSubtitle}>Se generarán al recibir datos de salud</Text>

            <View style={{ padding: 20, alignItems: 'center' }}>
              <Text style={{ fontSize: 12, color: '#C4D5C9', fontStyle: 'italic', textAlign: 'center' }}>
                No hay recomendaciones disponibles. Conecta tu dispositivo médico para comenzar.
              </Text>
            </View>
          </View>

        </ScrollView>
      ) : activeTab === 'agenda' ? (
        <AgendaScreen />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#626B64' }}>Sección en desarrollo...</Text>
        </View>
      )}

      {/* Barra de Navegación Inferior */}
      <View style={styles.bottomNavContainer}>
        {[
          { key: 'inicio', label: 'Inicio', icon: 'home' },
          { key: 'agenda', label: 'Agenda', icon: 'calendar' },
          { key: 'historial', label: 'Historial', icon: 'book-open' },
          { key: 'perfil', label: 'Perfil', icon: 'user' },
        ].map((tab) => (
          <TouchableOpacity key={tab.key} style={styles.bottomNavItem} onPress={() => setActiveTab(tab.key as any)}>
            <View style={[styles.bottomNavIconBox, activeTab === tab.key && styles.bottomNavIconBoxActive]}>
              <Feather name={tab.icon as any} size={20} color={activeTab === tab.key ? '#1E3A2B' : '#828B84'} />
            </View>
            <Text style={[styles.bottomNavText, activeTab === tab.key && styles.bottomNavTextActive]}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}