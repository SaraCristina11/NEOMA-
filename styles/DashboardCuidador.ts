import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const dashboardCuidadorStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2EE', // Tono exacto de fondo verdoso/gris suave
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 170, // Espacio suficiente para no tapar el footer al scrollear
  },

  // Header Superior
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoBadge: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#1E3A2B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1E3A2B',
    letterSpacing: 0.5,
  },
  notificationBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(30, 58, 43, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  redBadgeDot: {
    position: 'absolute',
    top: 9,
    right: 9,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E57373',
  },

  // Menú Flotante de Notificaciones
  notificationPopover: {
    position: 'absolute',
    top: 95,
    right: 16,
    width: width - 32,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    zIndex: 100,
    borderWidth: 1,
    borderColor: '#E2E8E0',
  },
  notificationHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E3A2B',
  },
  emptyNotificationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 20,
    backgroundColor: '#F9FBF9',
    borderRadius: 12,
  },
  emptyNotificationText: {
    fontSize: 13,
    color: '#828B84',
    fontStyle: 'italic',
  },

  // Tarjeta de Paciente Enlazado
  patientBannerCard: {
    backgroundColor: '#1B3527',
    borderRadius: 20,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  patientBannerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  patientAvatarCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  patientBannerSub: {
    fontSize: 9,
    fontWeight: '700',
    color: '#A7D7B5',
    letterSpacing: 0.8,
  },
  patientBannerName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 1,
  },
  syncBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
    gap: 6,
  },
  syncGreenDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#A7D7B5',
  },
  syncText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  // Textos Generales
  greetingDate: {
    fontSize: 10,
    fontWeight: '700',
    color: '#828B84',
    letterSpacing: 1,
    marginBottom: 2,
  },
  greetingTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1E3A2B',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: '700',
    color: '#828B84',
    letterSpacing: 0.8,
    marginBottom: 10,
  },

  // Signos Vitales
  vitalsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
  },
  vitalCardDark: {
    width: '48%',
    backgroundColor: '#1B3527',
    borderRadius: 18,
    padding: 16,
  },
  vitalCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
  },
  vitalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  vitalIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vitalStatusChip: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  vitalStatusText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#A7D7B5',
  },
  vitalValueLight: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  vitalUnitLight: {
    fontSize: 12,
    fontWeight: '600',
    color: '#A7D7B5',
  },
  vitalNameLight: {
    fontSize: 11,
    color: '#C2CBC3',
    marginTop: 2,
  },
  vitalValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1E3A2B',
  },
  vitalUnit: {
    fontSize: 12,
    fontWeight: '600',
    color: '#828B84',
  },
  vitalName: {
    fontSize: 11,
    color: '#828B84',
    marginTop: 2,
  },

  // Tarjeta de Recomendaciones IA (Fondo Verde Oscuro continuo)
  aiRecommendationCard: {
    backgroundColor: '#1B3527',
    borderRadius: 22,
    padding: 18,
    marginBottom: 16,
  },
  aiHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 14,
  },
  aiIconBadge: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#E2EFE7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aiSubtitle: {
    fontSize: 10,
    fontWeight: '700',
    color: '#A7D7B5',
    letterSpacing: 0.5,
  },
  aiHeaderTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  // Tarjetas de Alertas y Novedades
  alertsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
  },
  emptyStateBox: {
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  emptyStateText: {
    fontSize: 12,
    color: '#828B84',
    textAlign: 'center',
    fontStyle: 'italic',
  },

  fixedBottomFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    paddingTop: 12,
    paddingBottom: 20,
    paddingHorizontal: 16, // Padding general para que todo respire
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 10,
    zIndex: 999,
  },

  emergencyRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
    backgroundColor: '#F7F9F7', 
    padding: 6,                 
    borderRadius: 16,           
  },

  emergencyBtnRed: {
    flex: 1,
    backgroundColor: '#CF4444',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 16,
    gap: 6,
  },
  emergencyBtnPurple: {
    flex: 1,
    backgroundColor: '#6C5CE7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 16,
    gap: 6,
  },
  emergencyBtnGreen: {
    flex: 1,
    backgroundColor: '#1B3527',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 16,
    gap: 6,
  },
  emergencyIconBox: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emergencyBtnText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
  navDivider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginBottom: 8,
  },
  bottomNavRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomNavItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  bottomNavText: {
    fontSize: 11,
    color: '#828B84',
    marginTop: 2,
  },
  bottomNavTextActive: {
    color: '#1E3A2B',
    fontWeight: '700',
  },
  activeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#1E3A2B',
    marginTop: 2,
  },
});