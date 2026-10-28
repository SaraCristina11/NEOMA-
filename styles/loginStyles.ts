import { StyleSheet, Platform } from 'react-native';

export const theme = {
  colors: {
    iconDefault: '#1E3A2B',
    iconActive: '#FFFFFF',
    iconLogo: '#EAEADF',
    placeholder: '#A0A8A2',
  },
  icons: {
    size: 18,
    smallSize: 16,
    logoSize: 24,
  },
};

export const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#F5F5ED',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoBadge: {
    width: 100,
    height: 100,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    overflow: 'hidden',
  },
  logoImage: {
    width: 200,
    height: 200,
  },
  brandTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E3A2B',
    letterSpacing: 1,
  },
  brandSubtitle: {
    fontSize: 13,
    color: '#3B5945',
    marginTop: 2,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E3A2B',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#828B84',
    marginBottom: 18,
    marginTop: 2,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1E3A2B',
    marginBottom: 6,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5ED',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 48,
    marginBottom: 14,
    gap: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#1E3A2B',
  },
  button: {
    backgroundColor: '#1E3A2B',
    height: 50,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  footer: {
    marginTop: 24,
    alignItems: 'center',
    gap: 8,
  },
  footerText: {
    fontSize: 12,
    color: '#6B756E',
  },
  link: {
    fontWeight: 'bold',
    color: '#1E3A2B',
  },

  /* --- Barra Superior de Navegación (Registro) --- */
  navHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 10 : 20,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  navHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backCircleButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#EAEADF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navHeaderTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E3A2B',
  },
  navHeaderSubtitle: {
    fontSize: 11,
    color: '#828B84',
  },
  navHeaderRightBadge: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#1E3A2B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* --- Tarjetas de Selección de Rol --- */
  roleContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  roleMainTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1E3A2B',
    textAlign: 'center',
    marginBottom: 4,
  },
  roleMainSubtitle: {
    fontSize: 12,
    color: '#6B756E',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  roleCard: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 3,
  },
  roleIconBadge: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#1E3A2B',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  roleTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E3A2B',
    marginBottom: 6,
  },
  roleDescription: {
    fontSize: 12,
    color: '#6B756E',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 16,
  },
  roleButton: {
    backgroundColor: '#EAEADF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  roleButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E3A2B',
  },

  /* --- Modal de Recuperación --- */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    paddingBottom: 40,
    width: '100%',
    elevation: 10,
  },
  modalHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F5F5ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5ED',
    borderRadius: 16,
    padding: 4,
    marginVertical: 16,
  },
  tabActive: {
    flex: 1,
    backgroundColor: '#1E3A2B',
    borderRadius: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  tabInactive: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  tabTextActive: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  tabTextInactive: {
    color: '#6B756E',
    fontSize: 13,
    fontWeight: '600',
  },
  submitButtonDisabled: {
    backgroundColor: '#EAEADF',
    height: 50,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  submitButtonDisabledText: {
    color: '#828B84',
    fontSize: 14,
    fontWeight: 'bold',
  },


  /* Indicador Superior de Rol */
  roleIndicatorBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAEADF',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    gap: 6,
    marginBottom: 16,
    marginTop: 10,
  },
  roleIndicatorText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E3A2B',
  },

  /* Tarjetas de Verificación */
  verificationCard: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  verificationIconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#EAEADF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  verificationTextBox: {
    flex: 1,
  },
  verificationCardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E3A2B',
    marginBottom: 2,
  },
  verificationCardDesc: {
    fontSize: 11,
    color: '#828B84',
    lineHeight: 15,
  },

  /* Contenedor del Formulario con correo */
  formStepContainer: {
    width: '100%',
    maxWidth: 380,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 24,
  },

  /* Barra de Progreso de 3 Pasos */
  progressBarRow: {
    flexDirection: 'row',
    width: '100%',
    gap: 8,
    marginBottom: 16,
    marginTop: 8,
  },
  progressSegment: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#DDE3DC',
  },
  progressActive: {
    backgroundColor: '#1E3A2B',
  },

  /* Tarjeta Blanca de Paso */
  cardStep: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    marginBottom: 14,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  miniIconBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EAEADF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepTitleText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E3A2B',
  },

  /* Avatar y Cámara */
  avatarSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#DDE8DC',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  avatarText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#1E3A2B',
    marginTop: 2,
  },
  cameraBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: '#1E3A2B',
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  avatarSubtext: {
    fontSize: 12,
    color: '#A0A5A0',
    marginTop: 8,
  },

  /* Cajas de Input ultra redondeadas */
  inputBoxRounded: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3ED',
    borderRadius: 20,
    paddingHorizontal: 14,
    height: 48,
    marginBottom: 12,
  },
  rowTwoInputs: {
    flexDirection: 'row',
    width: '100%',
  },

  /* Alerta Informativa */
  infoAlertBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDE8DC',
    width: '100%',
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 10,
    marginBottom: 16,
  },
  infoAlertText: {
    fontSize: 13,
    color: '#1E3A2B',
    fontWeight: '600',
  },

  /* Botón Siguiente */
  nextStepButton: {
    width: '100%',
    backgroundColor: '#1E3A2B',
    borderRadius: 25,
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  nextStepButtonText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 15,
    letterSpacing: 0.5,
  },

  /* Icono grande superior de verificación */
  verificationBigIconBox: {
    width: 72,
    height: 72,
    borderRadius: 20,
    backgroundColor: '#DDE8DC',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  roleMainSubtitleOtp: {
    fontSize: 13,
    color: '#828B84',
    textAlign: 'center',
    marginBottom: 28,
  },

  /* Contenedor de los 6 inputs OTP */
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 340,
    marginBottom: 24,
  },
  otpBox: {
    width: 46,
    height: 56,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#1E3A2B',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },


  /* Subtítulo pequeño de encabezado antecedentes clinicos*/
  stepSubtitleText: {
    fontSize: 11,
    color: '#A0A5A0',
  },
  sectionTitleLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#3B5846',
    letterSpacing: 0.8,
    marginBottom: 8,
  },

  /* Fila de Input + Botón de Agregar */
  addRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  inputBoxDotted: {
    flex: 1,
    backgroundColor: '#F3F3ED',
    borderWidth: 1,
    borderColor: '#D0D5CE',
    borderStyle: 'dashed',
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 46,
    justifyContent: 'center',
    marginRight: 10,
  },
  addCircleButtonGreen: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#1E3A2B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCircleButtonRed: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#C83B2B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Tarjeta de Elemento Agregado */
  addedItemCard: {
    width: '100%',
    backgroundColor: '#F3F3ED',
    borderRadius: 18,
    padding: 12,
    marginBottom: 10,
  },
  addedItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  orangeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E67E22',
    marginRight: 8,
  },
  redDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#C83B2B',
    marginRight: 8,
  },
  addedItemText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#1E3A2B',
  },

  /* Chips de Severidad (Alta, Mod, Baja) */
  severityRow: {
    flexDirection: 'row',
    gap: 8,
    paddingLeft: 18,
  },
  severityChip: {
    paddingVertical: 3,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1.5,
  },
  chipAlta: {
    borderColor: '#C83B2B',
  },
  chipAltaSelected: {
    backgroundColor: '#C83B2B',
  },
  chipMod: {
    borderColor: '#E67E22',
  },
  chipModSelected: {
    backgroundColor: '#E67E22',
  },
  chipBaja: {
    borderColor: '#27AE60',
  },
  chipBajaSelected: {
    backgroundColor: '#27AE60',
  },
  chipTextAlta: {
    fontSize: 11,
    fontWeight: '700',
    color: '#C83B2B',
  },
  chipTextMod: {
    fontSize: 11,
    fontWeight: '700',
    color: '#E67E22',
  },
  chipTextBaja: {
    fontSize: 11,
    fontWeight: '700',
    color: '#27AE60',
  },
  chipTextSelected: {
    color: '#FFFFFF',
  },

  /* Texto de Términos y Privacidad inferior */
  termsText: {
    fontSize: 11,
    color: '#828B84',
    textAlign: 'center',
    marginTop: 16,
    paddingHorizontal: 20,
    lineHeight: 16,
  },
  termsLink: {
    fontWeight: '700',
    color: '#1E3A2B',
  },

  /* Texto de ayuda inferior debajo de los inputs */
  inputHelpText: {
    fontSize: 10,
    color: '#A0A5A0',
    marginTop: -4,
    marginBottom: 4,
    paddingLeft: 4,
  },

  /* Botón Siguiente Deshabilitado */
  nextStepButtonDisabled: {
    width: '100%',
    backgroundColor: '#C5CCC7',
    borderRadius: 25,
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  nextStepButtonDisabledText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 15,
    letterSpacing: 0.5,
  },

  /* Fondo oscurecido pegado a la parte inferior de la pantalla */
  modalOverlayBottom: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  /* Tarjeta flotante inferior estilo Bottom Sheet */
  modalBottomSheet: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    paddingTop: 12,
    paddingHorizontal: 24,
    paddingBottom: 36,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 20,
  },

  /* Línea gris superior del modal (Handle bar) */
  modalHandleBar: {
    width: 38,
    height: 4,
    backgroundColor: '#D0D5CE',
    borderRadius: 2,
    marginBottom: 20,
  },

  /* Círculo verde claro con halo decorativo */
  successIconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#DDE8DC',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 6,
    borderColor: '#EEF4EC',
  },

  /* Título principal del modal */
  successModalTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1E3A2B',
    marginBottom: 8,
    textAlign: 'center',
  },

  /* Subtítulo informativo */
  successModalSubtitle: {
    fontSize: 13,
    color: '#828B84',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 24,
    paddingHorizontal: 10,
  },
});