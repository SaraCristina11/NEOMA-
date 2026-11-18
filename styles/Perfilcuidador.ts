import { StyleSheet } from 'react-native';

export const perfilStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7F4',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 120,
  },

  // Banner Superior / Paciente Enlazado
  patientBannerCard: {
    backgroundColor: '#1E3A2B',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    backgroundColor: '#2D5A43',
    justifyContent: 'center',
    alignItems: 'center',
  },
  patientBannerSub: {
    fontSize: 10,
    color: '#A7D7B5',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  patientBannerName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  syncBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    gap: 6,
  },
  syncGreenDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#2ECC71',
  },
  syncText: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '600',
  },

  // Títulos y Secciones
  greetingDate: {
    fontSize: 11,
    color: '#828B84',
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  greetingTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E3A2B',
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 11,
    color: '#828B84',
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 6,
  },

  // Tarjetas de Sección
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  avatarLargeCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E2E8E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E3A2B',
  },

  // Filas de Datos Personales
  fieldRow: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F4F0',
  },
  fieldLabel: {
    fontSize: 12,
    color: '#828B84',
    marginBottom: 2,
    fontWeight: '500',
  },
  fieldValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E3A2B',
  },

  // Botón Cerrar Sesión
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDF2F2',
    borderWidth: 1,
    borderColor: '#FADBD8',
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
    marginTop: 10,
    marginBottom: 20,
  },
  logoutButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#D9534F',
  },

  // Footer Fijo y Navegación
  fixedBottomFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 10,
  },
  emergencyRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },
  emergencyBtnRed: {
    flex: 1,
    backgroundColor: '#D9534F',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emergencyBtnPurple: {
    flex: 1,
    backgroundColor: '#6C5CE7',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emergencyBtnGreen: {
    flex: 1,
    backgroundColor: '#1E3A2B',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emergencyIconBox: {
    marginBottom: 4,
  },
  emergencyBtnText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  navDivider: {
    height: 1,
    backgroundColor: '#E2E8E0',
    marginBottom: 12,
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
    position: 'relative',
  },
  bottomNavText: {
    fontSize: 12,
    color: '#828B84',
    marginTop: 4,
    fontWeight: '500',
  },
  bottomNavTextActive: {
    color: '#1E3A2B',
    fontWeight: '700',
  },
  activeDarkDot: {
    position: 'absolute',
    bottom: -4,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#1E3A2B',
  },
  
  topLogoutButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FDF2F2',
    borderWidth: 1,
    borderColor: '#FADBD8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Nota de Permisos Institucionales
  permissionsNoticeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E9F5EC',
    padding: 12,
    borderRadius: 12,
    gap: 8,
    marginTop: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#D4EDDA',
  },
  permissionsNoticeText: {
    fontSize: 12,
    color: '#1E3A2B',
    fontWeight: '500',
    flex: 1,
    lineHeight: 16,
  },

  // Tarjetas de Enlace Rápido (Historia clínica / Datos médicos)
  quickActionsGrid: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
  },
  quickActionCard: {
    flex: 1,
    backgroundColor: '#F9FBF9',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8E0',
  },
  quickActionIconBox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#E9F5EC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickActionSub: {
    fontSize: 9,
    fontWeight: '700',
    color: '#828B84',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  quickActionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E3A2B',
  },

});