import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image, Modal, ScrollView } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { styles, theme } from './styles/loginStyles';

export default function App() {
  // Estado único para controlar la pantalla actual y el rol seleccionado
  const [currentScreen, setCurrentScreen] = useState<
    'login' | 'register' | 'verify_method' | 'personal_data' | 'verify_code' | 'clinical_history' | 'create_password' | 'caregiver_link'
  >('login');
  const [selectedRole, setSelectedRole] = useState<'patient' | 'caregiver'>('patient');

  // Estados de Login
  const [documento, setDocumento] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Estados de Modal de Recuperación
  const [modalVisible, setModalVisible] = useState(false);
  const [recuperarTipo, setRecuperarTipo] = useState<'correo' | 'celular'>('correo');
  const [contactoInput, setContactoInput] = useState('');

  // Estados de Registro (Datos Personales / Cuidador)
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [tipoDoc, setTipoDoc] = useState('C.C. — Cédula de Ciudadanía');
  const [numDoc, setNumDoc] = useState('');
  const [edad, setEdad] = useState('');
  const [genero, setGenero] = useState('');
  const [tipoSangre, setTipoSangre] = useState('');
  const [fechaNac, setFechaNac] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  // Estados para los 6 dígitos del código de verificación
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  // Tipos e Interfaces para los antecedentes
  interface ItemClinico {
    id: string;
    nombre: string;
    severidad: 'Alta' | 'Mod' | 'Baja';
  }

  // Estados para Vincular Paciente (Cuidador - Paso 2)
  const [docPaciente, setDocPaciente] = useState('');
  const [codigoVinculacion, setCodigoVinculacion] = useState('');

  // Estados para Enfermedades Crónicas
  const [enfermedades, setEnfermedades] = useState<ItemClinico[]>([]);
  const [inputEnfermedad, setInputEnfermedad] = useState('');

  // Estados para Alergias Conocidas
  const [alergias, setAlergias] = useState<ItemClinico[]>([]);
  const [inputAlergia, setInputAlergia] = useState('');

  // Agregar Enfermedad
  const agregarEnfermedad = () => {
    if (inputEnfermedad.trim()) {
      setEnfermedades([
        ...enfermedades,
        { id: Date.now().toString(), nombre: inputEnfermedad.trim(), severidad: 'Baja' }
      ]);
      setInputEnfermedad('');
    }
  };

  // Eliminar Enfermedad
  const eliminarEnfermedad = (id: string) => {
    setEnfermedades(enfermedades.filter(item => item.id !== id));
  };

  // Cambiar Severidad de Enfermedad
  const cambiarSeveridadEnfermedad = (id: string, severidad: 'Alta' | 'Mod' | 'Baja') => {
    setEnfermedades(enfermedades.map(item => item.id === id ? { ...item, severidad } : item));
  };

  // Agregar Alergia
  const agregarAlergia = () => {
    if (inputAlergia.trim()) {
      setAlergias([
        ...alergias,
        { id: Date.now().toString(), nombre: inputAlergia.trim(), severidad: 'Baja' }
      ]);
      setInputAlergia('');
    }
  };

  // Eliminar Alergia
  const eliminarAlergia = (id: string) => {
    setAlergias(alergias.filter(item => item.id !== id));
  };

  // Cambiar Severidad de Alergia
  const cambiarSeveridadAlergia = (id: string, severidad: 'Alta' | 'Mod' | 'Baja') => {
    setAlergias(alergias.map(item => item.id === id ? { ...item, severidad } : item));
  };

  // Estados para Paso 3: Crear Contraseña
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Estado para el modal de éxito de registro
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* BARRA SUPERIOR */}
      {currentScreen !== 'login' && (
        <View style={styles.navHeader}>
          <View style={styles.navHeaderLeft}>
            {/* Botón Flecha Atrás */}
            <TouchableOpacity
              style={styles.backCircleButton}
              onPress={() => {
                if (currentScreen === 'create_password') {
                  setCurrentScreen(selectedRole === 'caregiver' ? 'caregiver_link' : 'clinical_history');
                } else if (currentScreen === 'caregiver_link' || currentScreen === 'clinical_history') {
                  setCurrentScreen('verify_code');
                } else if (currentScreen === 'verify_code') {
                  setCurrentScreen('personal_data');
                } else if (currentScreen === 'personal_data') {
                  setCurrentScreen('verify_method');
                } else if (currentScreen === 'verify_method') {
                  setCurrentScreen('register');
                } else {
                  setCurrentScreen('login');
                }
              }}
            >
              <Feather name="arrow-left" size={18} color="#1E3A2B" />
            </TouchableOpacity>

            <View>
              <Text style={styles.navHeaderTitle}>Crear Cuenta — NEOMA</Text>
              <Text style={styles.navHeaderSubtitle}>
                {currentScreen === 'register'
                  ? 'Selecciona tu rol'
                  : currentScreen === 'verify_method'
                  ? 'Método de verificación'
                  : currentScreen === 'verify_code'
                  ? 'Código de verificación'
                  : currentScreen === 'personal_data'
                  ? 'PASO 1 DE 3'
                  : currentScreen === 'caregiver_link' || currentScreen === 'clinical_history'
                  ? 'PASO 2 DE 3'
                  : 'PASO 3 DE 3'}
              </Text>
            </View>
          </View>
          <View style={styles.navHeaderRightBadge}>
            <Ionicons name="heart" size={18} color="#FFFFFF" />
          </View>
        </View>
      )}

      <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flexGrow: 1, width: '100%' }}>

        {/* VISTA 1: FORMULARIO DE LOGIN */}
        {currentScreen === 'login' && (
          <>
            <View style={styles.header}>
              <View style={styles.logoBadge}>
                <Image
                  source={require('./assets/neomaicon.png')}
                  style={styles.logoImage}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.brandTitle}>NEOMA</Text>
              <Text style={styles.brandSubtitle}>Ecosistema Médico Inteligente</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Iniciar Sesión</Text>
              <Text style={styles.cardSubtitle}>Ingresa con tu documento de identidad</Text>

              <Text style={styles.label}>Número de Documento</Text>
              <View style={styles.inputBox}>
                <Feather name="user" size={theme.icons.size} color={theme.colors.iconDefault} />
                <TextInput
                  style={styles.input}
                  placeholder="Ej. 25.678.901"
                  placeholderTextColor={theme.colors.placeholder}
                  value={documento}
                  onChangeText={setDocumento}
                  keyboardType="numeric"
                />
              </View>

              <Text style={styles.label}>Contraseña</Text>
              <View style={styles.inputBox}>
                <Feather name="lock" size={theme.icons.size} color={theme.colors.iconDefault} />
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor={theme.colors.placeholder}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Feather name={showPassword ? "eye" : "eye-off"} size={theme.icons.size} color={theme.colors.iconDefault} />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={() => alert(`Iniciando sesión: ${documento}`)}
              >
                <Text style={styles.buttonText}>INGRESAR</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footer}>
              <TouchableOpacity activeOpacity={0.7} onPress={() => setCurrentScreen('register')}>
                <Text style={styles.footerText}>
                  ¿No tienes cuenta? <Text style={styles.link}>Registrarse</Text>
                </Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.7} onPress={() => setModalVisible(true)}>
                <Text style={styles.footerText}>
                  ¿Olvidaste tu contraseña? <Text style={styles.link}>Recuperar acceso</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {/* VISTA 2: SELECCIÓN DE ROL */}
        {currentScreen === 'register' && (
          <View style={styles.roleContainer}>
            <Text style={styles.roleMainTitle}>¿Cómo quieres registrarte?</Text>
            <Text style={styles.roleMainSubtitle}>
              Selecciona tu rol para personalizar tu experiencia en NEOMA
            </Text>

            <View style={styles.roleCard}>
              <View style={styles.roleIconBadge}>
                <Feather name="user" size={28} color="#FFFFFF" />
              </View>
              <Text style={styles.roleTitle}>Soy Paciente</Text>
              <Text style={styles.roleDescription}>
                Accede a tu historial clínico, agenda citas y gestiona tus medicamentos
              </Text>
              <TouchableOpacity
                style={styles.roleButton}
                activeOpacity={0.8}
                onPress={() => {
                  setSelectedRole('patient');
                  setCurrentScreen('verify_method');
                }}
              >
                <Text style={styles.roleButtonText}>Continuar como paciente</Text>
                <Feather name="chevron-right" size={16} color="#1E3A2B" />
              </TouchableOpacity>
            </View>

            <View style={styles.roleCard}>
              <View style={styles.roleIconBadge}>
                <Ionicons name="heart" size={26} color="#FFFFFF" />
              </View>
              <Text style={styles.roleTitle}>Soy Cuidador / Familiar</Text>
              <Text style={styles.roleDescription}>
                Acompaña y monitorea la salud de tu ser querido en tiempo real
              </Text>
              <TouchableOpacity
                style={styles.roleButton}
                activeOpacity={0.8}
                onPress={() => {
                  setSelectedRole('caregiver');
                  setCurrentScreen('verify_method');
                }}
              >
                <Text style={styles.roleButtonText}>Continuar como cuidador</Text>
                <Feather name="chevron-right" size={16} color="#1E3A2B" />
              </TouchableOpacity>
            </View>

            <View style={styles.footer}>
              <TouchableOpacity activeOpacity={0.7} onPress={() => setCurrentScreen('login')}>
                <Text style={styles.footerText}>
                  ¿Ya tienes una cuenta? <Text style={styles.link}>Iniciar Sesión</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* VISTA 3: MÉTODO DE VERIFICACIÓN */}
        {currentScreen === 'verify_method' && (
          <View style={styles.roleContainer}>
            <View style={styles.roleIndicatorBadge}>
              <Feather name="user" size={14} color="#1E3A2B" />
              <Text style={styles.roleIndicatorText}>
                {selectedRole === 'patient' ? 'Paciente' : 'Cuidador / Familiar'}
              </Text>
            </View>

            <Text style={styles.roleMainTitle}>¿Cómo quieres verificarte?</Text>
            <Text style={styles.roleMainSubtitle}>
              Selecciona el método para confirmar tu identidad
            </Text>

            <TouchableOpacity
              style={styles.verificationCard}
              activeOpacity={0.8}
              onPress={() => setCurrentScreen('personal_data')}
            >
              <View style={styles.verificationIconBox}>
                <Feather name="mail" size={22} color="#1E3A2B" />
              </View>
              <View style={styles.verificationTextBox}>
                <Text style={styles.verificationCardTitle}>Con Correo Electrónico</Text>
                <Text style={styles.verificationCardDesc}>Recibirás un código de 6 dígitos en tu email</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#828B84" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.verificationCard}
              activeOpacity={0.8}
              onPress={() => setCurrentScreen('personal_data')}
            >
              <View style={styles.verificationIconBox}>
                <Feather name="phone" size={20} color="#1E3A2B" />
              </View>
              <View style={styles.verificationTextBox}>
                <Text style={styles.verificationCardTitle}>Con Número de Celular</Text>
                <Text style={styles.verificationCardDesc}>Recibirás un código SMS al número registrado</Text>
              </View>
              <Feather name="chevron-right" size={20} color="#828B84" />
            </TouchableOpacity>

            <View style={styles.footer}>
              <TouchableOpacity activeOpacity={0.7} onPress={() => setCurrentScreen('login')}>
                <Text style={styles.footerText}>
                  ¿Ya tienes una cuenta? <Text style={styles.link}>Iniciar Sesión</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* MODAL RECUPERAR ACCESO */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeaderRow}>
                <View>
                  <Text style={styles.cardTitle}>Recuperar Contraseña</Text>
                  <Text style={styles.cardSubtitle}>Selecciona cómo deseas recuperar tu acceso</Text>
                </View>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Feather name="x" size={theme.icons.size} color={theme.colors.iconDefault} />
                </TouchableOpacity>
              </View>

              <View style={styles.tabContainer}>
                <TouchableOpacity
                  style={recuperarTipo === 'correo' ? styles.tabActive : styles.tabInactive}
                  onPress={() => { setRecuperarTipo('correo'); setContactoInput(''); }}
                >
                  <Feather
                    name="mail"
                    size={theme.icons.smallSize}
                    color={recuperarTipo === 'correo' ? theme.colors.iconActive : theme.colors.iconDefault}
                  />
                  <Text style={recuperarTipo === 'correo' ? styles.tabTextActive : styles.tabTextInactive}>Correo</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={recuperarTipo === 'celular' ? styles.tabActive : styles.tabInactive}
                  onPress={() => { setRecuperarTipo('celular'); setContactoInput(''); }}
                >
                  <Feather
                    name="phone"
                    size={theme.icons.smallSize}
                    color={recuperarTipo === 'celular' ? theme.colors.iconActive : theme.colors.iconDefault}
                  />
                  <Text style={recuperarTipo === 'celular' ? styles.tabTextActive : styles.tabTextInactive}>Celular</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.label}>
                {recuperarTipo === 'correo' ? 'Correo Electrónico' : 'Número de Celular'}
              </Text>
              <View style={styles.inputBox}>
                <Feather
                  name={recuperarTipo === 'correo' ? 'mail' : 'phone'}
                  size={theme.icons.size}
                  color={theme.colors.iconDefault}
                />
                <TextInput
                  style={styles.input}
                  placeholder={recuperarTipo === 'correo' ? 'correo@ejemplo.com' : 'Ej. 3001234567'}
                  placeholderTextColor={theme.colors.placeholder}
                  value={contactoInput}
                  onChangeText={setContactoInput}
                  keyboardType={recuperarTipo === 'correo' ? 'email-address' : 'phone-pad'}
                  autoCapitalize="none"
                />
              </View>

              <TouchableOpacity
                style={contactoInput ? styles.button : styles.submitButtonDisabled}
                activeOpacity={0.8}
                disabled={!contactoInput}
                onPress={() => {
                  alert(`Enlace enviado a: ${contactoInput}`);
                  setModalVisible(false);
                }}
              >
                <Text style={contactoInput ? styles.buttonText : styles.submitButtonDisabledText}>
                  Enviar Enlace de Recuperación
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* VISTA 4: DATOS PERSONALES / DATOS DEL CUIDADOR (PASO 1 DE 3) */}
        {currentScreen === 'personal_data' && (
          <View style={styles.formStepContainer}>
            <View style={styles.progressBarRow}>
              <View style={[styles.progressSegment, styles.progressActive]} />
              <View style={styles.progressSegment} />
              <View style={styles.progressSegment} />
            </View>

            <View style={styles.cardStep}>
              <View style={styles.cardHeaderRow}>
                <View style={styles.miniIconBadge}>
                  {selectedRole === 'caregiver' ? (
                    <Ionicons name="heart" size={16} color="#1E3A2B" />
                  ) : (
                    <Feather name="user" size={16} color="#1E3A2B" />
                  )}
                </View>
                <View>
                  <Text style={styles.stepTitleText}>
                    {selectedRole === 'caregiver' ? 'Datos del Cuidador' : 'Datos Personales'}
                  </Text>
                  {selectedRole === 'caregiver' && (
                    <Text style={styles.stepSubtitleText}>Debes ser mayor de 16 años</Text>
                  )}
                </View>
              </View>

              {selectedRole === 'patient' && (
                <View style={styles.avatarSection}>
                  <View style={styles.avatarCircle}>
                    <Feather name="camera" size={24} color="#1E3A2B" />
                    <Text style={styles.avatarText}>FOTO</Text>
                    <TouchableOpacity style={styles.cameraBadge}>
                      <Feather name="camera" size={12} color="#FFFFFF" />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.avatarSubtext}>Foto de perfil (opcional)</Text>
                </View>
              )}

              <Text style={styles.label}>{selectedRole === 'caregiver' ? 'Nombre' : 'Nombres'}</Text>
              <View style={styles.inputBoxRounded}>
                <Feather name="user" size={18} color="#828B84" />
                <TextInput
                  style={styles.input}
                  placeholder={selectedRole === 'caregiver' ? 'ej. Juan Carlos' : 'ej. Cristina María'}
                  placeholderTextColor="#A0A5A0"
                  value={nombres}
                  onChangeText={setNombres}
                />
              </View>

              <Text style={styles.label}>{selectedRole === 'caregiver' ? 'Apellido' : 'Apellidos'}</Text>
              <View style={styles.inputBoxRounded}>
                <Feather name="user" size={18} color="#828B84" />
                <TextInput
                  style={styles.input}
                  placeholder={selectedRole === 'caregiver' ? 'ej. Martinez' : 'ej. López Hernández'}
                  placeholderTextColor="#A0A5A0"
                  value={apellidos}
                  onChangeText={setApellidos}
                />
              </View>

              <Text style={styles.label}>Tipo de Documento</Text>
              <View style={styles.inputBoxRounded}>
                <Feather name="file-text" size={18} color="#828B84" />
                <TextInput
                  style={styles.input}
                  placeholder="C.C. — Cédula de Ciudadanía"
                  placeholderTextColor="#1E3A2B"
                  value={tipoDoc}
                  onChangeText={setTipoDoc}
                />
              </View>

              <Text style={styles.label}>Número de Documento</Text>
              <View style={styles.inputBoxRounded}>
                <Feather name="file-text" size={18} color="#828B84" />
                <TextInput
                  style={styles.input}
                  placeholder={selectedRole === 'caregiver' ? 'ej. 1.023.456.789' : 'ej. 25.678.901'}
                  placeholderTextColor="#A0A5A0"
                  keyboardType="numeric"
                  value={numDoc}
                  onChangeText={setNumDoc}
                />
              </View>

              {selectedRole === 'patient' ? (
                <View style={styles.rowTwoInputs}>
                  <View style={{ flex: 1, marginRight: 8 }}>
                    <Text style={styles.label}>Edad</Text>
                    <View style={styles.inputBoxRounded}>
                      <Feather name="activity" size={18} color="#828B84" />
                      <TextInput
                        style={styles.input}
                        placeholder="58"
                        placeholderTextColor="#A0A5A0"
                        keyboardType="numeric"
                        value={edad}
                        onChangeText={setEdad}
                      />
                    </View>
                  </View>

                  <View style={{ flex: 1, marginLeft: 8 }}>
                    <Text style={styles.label}>Género</Text>
                    <View style={styles.inputBoxRounded}>
                      <Feather name="user" size={18} color="#828B84" />
                      <TextInput
                        style={styles.input}
                        placeholder="Género..."
                        placeholderTextColor="#A0A5A0"
                        value={genero}
                        onChangeText={setGenero}
                      />
                    </View>
                  </View>
                </View>
              ) : (
                <>
                  <Text style={styles.label}>Género</Text>
                  <View style={styles.inputBoxRounded}>
                    <Feather name="user" size={18} color="#828B84" />
                    <TextInput
                      style={styles.input}
                      placeholder="Seleccionar..."
                      placeholderTextColor="#A0A5A0"
                      value={genero}
                      onChangeText={setGenero}
                    />
                  </View>
                </>
              )}

              {selectedRole === 'patient' && (
                <>
                  <Text style={styles.label}>Tipo de Sangre</Text>
                  <View style={styles.inputBoxRounded}>
                    <Feather name="droplet" size={18} color="#828B84" />
                    <TextInput
                      style={styles.input}
                      placeholder="Seleccionar tipo de sangre..."
                      placeholderTextColor="#A0A5A0"
                      value={tipoSangre}
                      onChangeText={setTipoSangre}
                    />
                  </View>
                </>
              )}

              <Text style={styles.label}>Fecha de Nacimiento</Text>
              <View style={styles.inputBoxRounded}>
                <Feather name="calendar" size={18} color="#828B84" />
                <TextInput
                  style={styles.input}
                  placeholder="dd/mm/aaaa"
                  placeholderTextColor="#A0A5A0"
                  value={fechaNac}
                  onChangeText={setFechaNac}
                />
                <Feather name="calendar" size={16} color="#A0A5A0" />
              </View>

              <Text style={styles.label}>Correo Electrónico</Text>
              <View style={styles.inputBoxRounded}>
                <Feather name="mail" size={18} color="#828B84" />
                <TextInput
                  style={styles.input}
                  placeholder="correo@ejemplo.com"
                  placeholderTextColor="#A0A5A0"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={correo}
                  onChangeText={setCorreo}
                />
              </View>

              <Text style={styles.label}>Teléfono</Text>
              <View style={styles.inputBoxRounded}>
                <Feather name="phone" size={18} color="#828B84" />
                <TextInput
                  style={styles.input}
                  placeholder="+57 300 000 0000"
                  placeholderTextColor="#A0A5A0"
                  keyboardType="phone-pad"
                  value={telefono}
                  onChangeText={setTelefono}
                />
              </View>
            </View>

            <View style={styles.infoAlertBox}>
              <Feather name="mail" size={18} color="#1E3A2B" />
              <Text style={styles.infoAlertText}>Se enviará un código a tu correo electrónico</Text>
            </View>

            <TouchableOpacity
              style={styles.nextStepButton}
              activeOpacity={0.8}
              onPress={() => setCurrentScreen('verify_code')}
            >
              <Text style={styles.nextStepButtonText}>SIGUIENTE</Text>
              <Feather name="chevron-right" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        )}

        {/* VISTA: CÓDIGO DE VERIFICACIÓN */}
        {currentScreen === 'verify_code' && (
          <View style={styles.roleContainer}>
            <View style={styles.progressBarRow}>
              <View style={[styles.progressSegment, styles.progressActive]} />
              <View style={styles.progressSegment} />
              <View style={styles.progressSegment} />
            </View>

            <View style={styles.verificationBigIconBox}>
              <Feather name="mail" size={32} color="#1E3A2B" />
            </View>

            <Text style={styles.roleMainTitle}>Código de Verificación</Text>
            <Text style={styles.roleMainSubtitleOtp}>
              Ingresa el código enviado a <Text style={{ fontWeight: '700', color: '#1E3A2B' }}>tu correo electrónico</Text>
            </Text>

            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.otpBox}
                  keyboardType="numeric"
                  maxLength={1}
                  value={digit}
                  onChangeText={(text) => {
                    const newOtp = [...otp];
                    newOtp[index] = text;
                    setOtp(newOtp);
                  }}
                />
              ))}
            </View>

            <TouchableOpacity activeOpacity={0.7} onPress={() => alert('Código reenviado')} style={{ marginBottom: 24 }}>
              <Text style={styles.footerText}>
                ¿No recibiste el código? <Text style={styles.link}>Reenviar código</Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={otp.every(d => d !== '') ? styles.button : styles.submitButtonDisabled}
              activeOpacity={0.8}
              disabled={!otp.every(d => d !== '')}
              onPress={() => {
                if (selectedRole === 'caregiver') {
                  setCurrentScreen('caregiver_link');
                } else {
                  setCurrentScreen('clinical_history');
                }
              }}
            >
              <Text style={otp.every(d => d !== '') ? styles.buttonText : styles.submitButtonDisabledText}>
                VERIFICAR
              </Text>
            </TouchableOpacity>

            <View style={styles.footer}>
              <TouchableOpacity activeOpacity={0.7} onPress={() => setCurrentScreen('verify_method')}>
                <Text style={styles.footerText}>
                  ← Cambiar método de verificación
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* VISTA 5: ANTECEDENTES CLÍNICOS (PASO 2 DE 3 - PACIENTE) */}
        {currentScreen === 'clinical_history' && (
          <View style={styles.formStepContainer}>
            <View style={styles.progressBarRow}>
              <View style={[styles.progressSegment, styles.progressActive]} />
              <View style={[styles.progressSegment, styles.progressActive]} />
              <View style={styles.progressSegment} />
            </View>

            <View style={styles.cardStep}>
              <View style={styles.cardHeaderRow}>
                <View style={styles.miniIconBadge}>
                  <Feather name="activity" size={16} color="#1E3A2B" />
                </View>
                <View>
                  <Text style={styles.stepTitleText}>Antecedentes Clínicos</Text>
                  <Text style={styles.stepSubtitleText}>Opcional — editable más tarde</Text>
                </View>
              </View>

              <Text style={styles.sectionTitleLabel}>ENFERMEDADES CRÓNICAS</Text>

              {enfermedades.map(item => (
                <View key={item.id} style={styles.addedItemCard}>
                  <View style={styles.addedItemHeader}>
                    <View style={styles.orangeDot} />
                    <Text style={styles.addedItemText}>{item.nombre}</Text>
                    <TouchableOpacity onPress={() => eliminarEnfermedad(item.id)}>
                      <Feather name="trash-2" size={16} color="#D9534F" />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.severityRow}>
                    <TouchableOpacity
                      style={[
                        styles.severityChip,
                        styles.chipAlta,
                        item.severidad === 'Alta' && styles.chipAltaSelected
                      ]}
                      onPress={() => cambiarSeveridadEnfermedad(item.id, 'Alta')}
                    >
                      <Text style={[styles.chipTextAlta, item.severidad === 'Alta' && styles.chipTextSelected]}>Alta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        styles.severityChip,
                        styles.chipMod,
                        item.severidad === 'Mod' && styles.chipModSelected
                      ]}
                      onPress={() => cambiarSeveridadEnfermedad(item.id, 'Mod')}
                    >
                      <Text style={[styles.chipTextMod, item.severidad === 'Mod' && styles.chipTextSelected]}>Mod</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        styles.severityChip,
                        styles.chipBaja,
                        item.severidad === 'Baja' && styles.chipBajaSelected
                      ]}
                      onPress={() => cambiarSeveridadEnfermedad(item.id, 'Baja')}
                    >
                      <Text style={[styles.chipTextBaja, item.severidad === 'Baja' && styles.chipTextSelected]}>Baja</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}

              <View style={styles.addRowContainer}>
                <View style={styles.inputBoxDotted}>
                  <TextInput
                    style={styles.input}
                    placeholder="Agregar condición o enfermedad.."
                    placeholderTextColor="#A0A5A0"
                    value={inputEnfermedad}
                    onChangeText={setInputEnfermedad}
                  />
                </View>
                <TouchableOpacity style={styles.addCircleButtonGreen} onPress={agregarEnfermedad}>
                  <Feather name="plus" size={20} color="#FFFFFF" />
                </TouchableOpacity>
              </View>

              <Text style={[styles.sectionTitleLabel, { marginTop: 18 }]}>ALERGIAS CONOCIDAS</Text>

              {alergias.map(item => (
                <View key={item.id} style={styles.addedItemCard}>
                  <View style={styles.addedItemHeader}>
                    <View style={styles.redDot} />
                    <Text style={styles.addedItemText}>{item.nombre}</Text>
                    <TouchableOpacity onPress={() => eliminarAlergia(item.id)}>
                      <Feather name="trash-2" size={16} color="#D9534F" />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.severityRow}>
                    <TouchableOpacity
                      style={[
                        styles.severityChip,
                        styles.chipAlta,
                        item.severidad === 'Alta' && styles.chipAltaSelected
                      ]}
                      onPress={() => cambiarSeveridadAlergia(item.id, 'Alta')}
                    >
                      <Text style={[styles.chipTextAlta, item.severidad === 'Alta' && styles.chipTextSelected]}>Alta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        styles.severityChip,
                        styles.chipMod,
                        item.severidad === 'Mod' && styles.chipModSelected
                      ]}
                      onPress={() => cambiarSeveridadAlergia(item.id, 'Mod')}
                    >
                      <Text style={[styles.chipTextMod, item.severidad === 'Mod' && styles.chipTextSelected]}>Mod</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        styles.severityChip,
                        styles.chipBaja,
                        item.severidad === 'Baja' && styles.chipBajaSelected
                      ]}
                      onPress={() => cambiarSeveridadAlergia(item.id, 'Baja')}
                    >
                      <Text style={[styles.chipTextBaja, item.severidad === 'Baja' && styles.chipTextSelected]}>Baja</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}

              <View style={styles.addRowContainer}>
                <View style={styles.inputBoxDotted}>
                  <TextInput
                    style={styles.input}
                    placeholder="Agregar alergia.."
                    placeholderTextColor="#A0A5A0"
                    value={inputAlergia}
                    onChangeText={setInputAlergia}
                  />
                </View>
                <TouchableOpacity style={styles.addCircleButtonRed} onPress={agregarAlergia}>
                  <Feather name="plus" size={20} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.nextStepButton}
              activeOpacity={0.8}
              onPress={() => setCurrentScreen('create_password')}
            >
              <Text style={styles.nextStepButtonText}>SIGUIENTE</Text>
              <Feather name="chevron-right" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        )}

        {/* VISTA: VINCULACIÓN CON PACIENTE (PASO 2 DE 3 - CUIDADOR) */}
        {currentScreen === 'caregiver_link' && (
          <View style={styles.formStepContainer}>
            <View style={styles.progressBarRow}>
              <View style={[styles.progressSegment, styles.progressActive]} />
              <View style={[styles.progressSegment, styles.progressActive]} />
              <View style={styles.progressSegment} />
            </View>

            <View style={styles.verificationBigIconBox}>
              <Feather name="link" size={32} color="#1E3A2B" />
            </View>

            <Text style={styles.roleMainTitle}>Vinculación con Paciente</Text>
            <Text style={styles.roleMainSubtitleOtp}>
              Ingresa los datos del paciente que vas a acompañar. El código de vinculación es generado desde el perfil del paciente.
            </Text>

            <View style={styles.cardStep}>
              <View style={styles.cardHeaderRow}>
                <View style={styles.miniIconBadge}>
                  <Feather name="link" size={16} color="#1E3A2B" />
                </View>
                <Text style={styles.stepTitleText}>Datos de Vinculación</Text>
              </View>

              <Text style={styles.label}>Documento del Paciente a Vincular</Text>
              <View style={styles.inputBoxRounded}>
                <Feather name="file-text" size={18} color="#828B84" />
                <TextInput
                  style={styles.input}
                  placeholder="ej. 25.678.901"
                  placeholderTextColor="#A0A5A0"
                  keyboardType="numeric"
                  value={docPaciente}
                  onChangeText={setDocPaciente}
                />
              </View>
              <Text style={styles.inputHelpText}>Número de documento de identidad del paciente</Text>

              <Text style={[styles.label, { marginTop: 14 }]}>Código de Vinculación</Text>
              <View style={styles.inputBoxRounded}>
                <Ionicons name="qr-code-outline" size={18} color="#828B84" />
                <TextInput
                  style={styles.input}
                  placeholder="EJ. NEO-2024-XXXX"
                  placeholderTextColor="#A0A5A0"
                  autoCapitalize="characters"
                  value={codigoVinculacion}
                  onChangeText={setCodigoVinculacion}
                />
              </View>
              <Text style={styles.inputHelpText}>Código generado desde Perfil → Configuración → Vincular cuidador</Text>
            </View>

            <View style={styles.infoAlertBox}>
              <Feather name="shield" size={18} color="#1E3A2B" />
              <Text style={styles.infoAlertText}>
                La vinculación es verificada por NEOMA. El paciente recibirá una notificación para confirmarla.
              </Text>
            </View>

            <TouchableOpacity
              style={docPaciente && codigoVinculacion ? styles.nextStepButton : styles.nextStepButtonDisabled}
              activeOpacity={0.8}
              disabled={!docPaciente || !codigoVinculacion}
              onPress={() => setCurrentScreen('create_password')}
            >
              <Text style={docPaciente && codigoVinculacion ? styles.nextStepButtonText : styles.nextStepButtonDisabledText}>
                SIGUIENTE
              </Text>
              <Feather
                name="chevron-right"
                size={18}
                color={docPaciente && codigoVinculacion ? '#FFFFFF' : '#A0A5A0'}
              />
            </TouchableOpacity>
          </View>
        )}

        {/* VISTA 6: CREAR CONTRASEÑA (PASO 3 DE 3) */}
        {currentScreen === 'create_password' && (
          <View style={styles.formStepContainer}>
            <View style={styles.progressBarRow}>
              <View style={[styles.progressSegment, styles.progressActive]} />
              <View style={[styles.progressSegment, styles.progressActive]} />
              <View style={[styles.progressSegment, styles.progressActive]} />
            </View>

            <View style={styles.cardStep}>
              <View style={styles.cardHeaderRow}>
                <View style={styles.miniIconBadge}>
                  <Feather name="shield" size={16} color="#1E3A2B" />
                </View>
                <Text style={styles.stepTitleText}>Crear Contraseña</Text>
              </View>

              <Text style={styles.label}>Contraseña</Text>
              <View style={styles.inputBoxRounded}>
                <Feather name="lock" size={18} color="#828B84" />
                <TextInput
                  style={styles.input}
                  placeholder="Mínimo 8 caracteres"
                  placeholderTextColor="#A0A5A0"
                  secureTextEntry={!showNewPassword}
                  value={newPassword}
                  onChangeText={setNewPassword}
                />
                <TouchableOpacity onPress={() => setShowNewPassword(!showNewPassword)}>
                  <Feather name={showNewPassword ? "eye" : "eye-off"} size={18} color="#828B84" />
                </TouchableOpacity>
              </View>

              <Text style={styles.label}>Confirmar Contraseña</Text>
              <View style={styles.inputBoxRounded}>
                <Feather name="lock" size={18} color="#828B84" />
                <TextInput
                  style={styles.input}
                  placeholder="Repetir contraseña"
                  placeholderTextColor="#A0A5A0"
                  secureTextEntry={!showConfirmPassword}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <Feather name={showConfirmPassword ? "eye" : "eye-off"} size={18} color="#828B84" />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.nextStepButton}
              activeOpacity={0.8}
              onPress={() => {
                if (!newPassword || !confirmPassword) {
                  alert('Por favor completa ambos campos de contraseña');
                  return;
                }
                if (newPassword !== confirmPassword) {
                  alert('Las contraseñas no coinciden');
                  return;
                }
                setSuccessModalVisible(true);
              }}
            >
              <Feather name="check-circle" size={18} color="#FFFFFF" />
              <Text style={styles.nextStepButtonText}>REGISTRARSE</Text>
            </TouchableOpacity>

            <Text style={styles.termsText}>
              Al registrarte aceptas los <Text style={styles.termsLink}>Términos de Servicio</Text> y la <Text style={styles.termsLink}>Política de Privacidad</Text> de NEOMA.
            </Text>
          </View>
        )}

      </ScrollView>

      {/* MODAL DE REGISTRO EXITOSO */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={successModalVisible}
        onRequestClose={() => setSuccessModalVisible(false)}
      >
        <View style={styles.modalOverlayBottom}>
          <View style={styles.modalBottomSheet}>
            <View style={styles.modalHandleBar} />
            <View style={styles.successIconCircle}>
              <Feather name="check" size={32} color="#1E3A2B" />
            </View>
            <Text style={styles.successModalTitle}>¡Registro Exitoso!</Text>
            <Text style={styles.successModalSubtitle}>
              Tu cuenta NEOMA ha sido creada. Ya puedes acceder a tu ecosistema médico inteligente.
            </Text>
            <TouchableOpacity
              style={styles.nextStepButton}
              activeOpacity={0.8}
              onPress={() => {
                setSuccessModalVisible(false);
                setCurrentScreen('login');
              }}
            >
              <Text style={styles.nextStepButtonText}>IR A INICIAR SESIÓN</Text>
              <Feather name="chevron-right" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </KeyboardAvoidingView>
  );
}