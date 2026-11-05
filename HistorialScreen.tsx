import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { historialStyles as styles } from './styles/Historial';

export default function HistorialScreen() {
  const [activeSubTab, setActiveSubTab] = useState<'ordenes' | 'laboratorios'>('ordenes');

  // Estados interactivos
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isArchiveView, setIsArchiveView] = useState(false); 

  // LISTAS VACÍAS (A la espera del backend)
  const [ordenesList] = useState<Array<any>>([]);
  const [laboratoriosList] = useState<Array<any>>([]);
  const [archivedList] = useState<Array<any>>([]); // <--- Lista de archivados vacía

  const currentList = activeSubTab === 'ordenes' ? ordenesList : laboratoriosList;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>

        {/* Cabecera Superior */}
        <View style={styles.headerTopRow}>
          <View>
            <Text style={styles.headerSub}>CRISTINA LÓPEZ</Text>
            <Text style={styles.headerTitle}>Historial Clínico</Text>
          </View>
          <View style={styles.topActionsBox}>
            {/* Botón de Archivar / Cambiar a vista de archivados */}
            <TouchableOpacity 
              style={[styles.topIconButton, isArchiveView && { backgroundColor: '#6B3E5E', borderColor: '#6B3E5E' }]}
              onPress={() => setIsArchiveView(!isArchiveView)}
              activeOpacity={0.8}
            >
              <Feather name="archive" size={16} color={isArchiveView ? "#FFFFFF" : "#1E3A2B"} />
            </TouchableOpacity>

            {/* Botón de Notificaciones Interactivo */}
            <TouchableOpacity
              style={styles.topIconButton}
              onPress={() => setIsNotificationOpen(!isNotificationOpen)}
              activeOpacity={0.8}
            >
              <Feather name="bell" size={16} color="#1E3A2B" />
            </TouchableOpacity>

            <View style={styles.profileAvatarCircle} />
          </View>
        </View>

        {/* MENÚ FLOTANTE DE NOTIFICACIONES */}
        {isNotificationOpen && (
          <View style={{
            position: 'absolute',
            top: 60,
            right: 50,
            width: 220,
            backgroundColor: '#FFFFFF',
            borderRadius: 16,
            padding: 12,
            borderWidth: 1,
            borderColor: '#E2E8E0',
            zIndex: 100,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 5,
          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 8,
              borderBottomWidth: 1,
              borderBottomColor: '#F4F7F4',
              paddingBottom: 6,
            }}>
              <Text style={{ fontSize: 12, fontWeight: '800', color: '#1E3A2B' }}>Notificaciones</Text>
              <TouchableOpacity onPress={() => setIsNotificationOpen(false)}>
                <Feather name="x" size={14} color="#828B84" />
              </TouchableOpacity>
            </View>

            <View style={{ paddingVertical: 12, alignItems: 'center', gap: 6 }}>
              <Feather name="bell-off" size={16} color="#828B84" />
              <Text style={{ fontSize: 11, color: '#828B84', fontStyle: 'italic' }}>Sin notificaciones</Text>
            </View>
          </View>
        )}

        {/* VISTA CONDICIONAL: SI ESTÁ ACTIVA LA VISTA DE ARCHIVADOS */}
        {isArchiveView ? (
          <>
            {/* Banner superior de documentos archivados */}
            <View style={styles.archiveBanner}>
              <View style={styles.archiveBannerLeft}>
                <Feather name="archive" size={16} color="#6B3E5E" />
                <Text style={styles.archiveBannerText}>Documentos Archivados</Text>
              </View>
              <TouchableOpacity 
                style={styles.archiveCloseBtn}
                onPress={() => setIsArchiveView(false)}
              >
                <Feather name="x" size={14} color="#6B3E5E" />
              </TouchableOpacity>
            </View>

            {/* Estado vacío de archivados */}
            <View style={styles.archiveEmptyContainer}>
              <View style={styles.archiveIconCircle}>
                <Feather name="archive" size={26} color="#6B3E5E" />
              </View>
              <Text style={styles.archiveEmptyTitle}>Sin documentos archivados</Text>
              <Text style={styles.archiveEmptySub}>Archiva documentos para mantener tu historial ordenado</Text>
            </View>
          </>
        ) : (
          /* VISTA NORMAL DEL HISTORIAL */
          <>
            {/* Pestañas internas: Órdenes Médicas vs Laboratorios */}
            <View style={styles.tabsRow}>
              <TouchableOpacity
                style={[styles.tabButton, activeSubTab === 'ordenes' && styles.tabButtonActive]}
                onPress={() => setActiveSubTab('ordenes')}
              >
                <MaterialCommunityIcons
                  name="stethoscope"
                  size={16}
                  color={activeSubTab === 'ordenes' ? '#FFFFFF' : '#626B64'}
                />
                <Text style={[styles.tabText, activeSubTab === 'ordenes' && styles.tabTextActive]}>
                  Órdenes Médicas
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tabButton, activeSubTab === 'laboratorios' && styles.tabButtonActive]}
                onPress={() => setActiveSubTab('laboratorios')}
              >
                <MaterialCommunityIcons
                  name="flask-outline"
                  size={16}
                  color={activeSubTab === 'laboratorios' ? '#FFFFFF' : '#626B64'}
                />
                <Text style={[styles.tabText, activeSubTab === 'laboratorios' && styles.tabTextActive]}>
                  Laboratorios
                </Text>
              </TouchableOpacity>
            </View>

            {/* Tarjeta Resumen Superior */}
            <View style={styles.summaryCard}>
              <View style={styles.summaryIconCircle}>
                <MaterialCommunityIcons name="stethoscope" size={18} color="#1E3A2B" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.summaryTitle}>
                  {currentList.length} {currentList.length === 1 ? 'documento' : 'documentos'}
                </Text>
                <Text style={styles.summarySub}>
                  {currentList.length > 0 ? 'Última actualización reciente' : 'Sin documentos registrados aún'}
                </Text>
              </View>
            </View>

            {/* Sección de Carga de Archivos (PDF) */}
            <View style={styles.uploadBox}>
              <View style={styles.uploadIconCircle}>
                <Feather name="upload" size={20} color="#1E3A2B" />
              </View>
              <Text style={styles.uploadTitle}>Subir PDF</Text>
              <Text style={styles.uploadSub}>
                {activeSubTab === 'ordenes' ? 'Orden o receta médica' : 'Resultado de laboratorio'}
              </Text>
              <TouchableOpacity style={styles.uploadBtn}>
                <Text style={styles.uploadBtnText}>Seleccionar archivo</Text>
              </TouchableOpacity>
              <Text style={styles.uploadFooterText}>Solo PDF • Máx. 20 MB</Text>
            </View>

            {/* CONTENIDO CONDICIONAL */}
            {currentList.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>
                  {activeSubTab === 'ordenes'
                    ? 'No hay órdenes médicas cargadas aún. Sube un archivo PDF para visualizarlo aquí.'
                    : 'No hay laboratorios cargados aún. Sube un archivo PDF para visualizarlo aquí.'}
                </Text>
              </View>
            ) : (
              currentList.map((item, index) => (
                <View key={index} style={styles.documentCard}>
                  <View style={styles.documentIconBox}>
                    <Feather name="file-text" size={18} color="#1E3A2B" />
                  </View>
                  <View style={styles.documentInfo}>
                    <Text style={styles.documentTitle}>{item.titulo}</Text>
                    <Text style={styles.documentMeta}>{item.detalles}</Text>
                  </View>
                  <TouchableOpacity>
                    <Feather name="more-vertical" size={18} color="#828B84" />
                  </TouchableOpacity>
                </View>
              ))
            )}

            {/* Mensaje informativo inferior */}
            <View style={styles.infoNoticeBox}>
              <Feather name="info" size={14} color="#828B84" style={{ marginTop: 1 }} />
              <Text style={styles.infoNoticeText}>
                Los archivos subidos son visibles para tu médico y cuidador. Solo se aceptan PDFs oficiales emitidos por un profesional médico o laboratorio certificado.
              </Text>
            </View>
          </>
        )}

      </ScrollView>
    </View>
  );
}