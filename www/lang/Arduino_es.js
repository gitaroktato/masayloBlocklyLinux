'use strict';
goog.provide ( 'Blockly.Msg.fr');
goog.require ( 'Blockly.Msg');
// Electron window
Blockly.Msg.com1 = "Seleccione puerto USB";
Blockly.Msg.com2 = "🔔 Debe seleccionar el puerto USB" ;
Blockly.Msg.check = "Compilar...";
Blockly.Msg.upload = "Cargar...";
Blockly.Msg.error = "🔔 ERROR: Bloques no conectados.";
Blockly.Msg.verif = "🔔 Compile primero, por favor. "
Blockly.Msg.save = "Guardar con formato";
Blockly.Msg.update = "Actualizar";
Blockly.Msg.new_update = "Nueva versión disponible. ¿Desea Vd. actualizar? " ;
Blockly.Msg.yes = "sí";
Blockly.Msg.no = "no";
Blockly.Msg.uptodate = "💯 ¡Su versión está actualizada!" ;
Blockly.Msg.download = "Descarga completada, la aplicación se instalará y reiniciará ..."
// common to all blocks
Blockly.Msg.HELPURL = "https://aprendizdetecnologo.com"; // do not translate
Blockly.Msg.pin = "pin";
Blockly.Msg._AT = "en";
Blockly.Msg.AV = "adelante";
Blockly.Msg.AR = "atrás";
Blockly.Msg.high = "HIGH"; // do not translate
Blockly.Msg.low = "LOW"; // do not translate
Blockly.Msg.right = "derecha";
Blockly.Msg.left = "izquierda";
Blockly.Msg.LetR = "derecha & izquierda";
Blockly.Msg.direction = "dirección";
Blockly.Msg.vitesse = "velocidad ";
// categories (menu)
Blockly.Msg.CAT_STOCKAGE = "💻 Almacenamiento";
Blockly.Msg.CAT_ARDUINO_BASICS="∞ Arduino básico"
Blockly.Msg.CAT_numerique = "- Digital";
Blockly.Msg.CAT_analogique = "~ Sensores";
Blockly.Msg.CAT_wifi = "＠ Wifi";
Blockly.Msg.CAT_TAB = "▦ Tablas";
Blockly.Msg.CAT_list = "▤ Listas";
Blockly.Msg.CAT_servo = "↷ Servo";
Blockly.Msg.CAT_del = "☄ LED";
Blockly.Msg.CAT_LOGIC = "⇋ Lógica";
Blockly.Msg.CAT_MATH = "∑ Matemáticas";
Blockly.Msg.CAT_TEXT = "❝ Textos";
Blockly.Msg.CAT_VARIABLES = "↝ Variables";
Blockly.Msg.CAT_FUNCTIONS = "∬ Funciones";
Blockly.Msg.CAT_ARDUINO = "☸️ Estructura";
Blockly.Msg.CAT_ARDUINO_IN = "⇅ Entrada/Salida";
Blockly.Msg.CAT_ARDUINO_OUT = "☺ Salida";
Blockly.Msg.CAT_ARDUINO_TIME = "◌ Tiempo";
Blockly.Msg.CAT_actionneur = "↻ Motores";
Blockly.Msg.CAT_com = "☎ Comunicaciones";
Blockly.Msg.CAT_ARDUINO_COMM_SERIAL = "- Puerto Serie";
Blockly.Msg.CAT_ARDUINO_COMM_SOFTSERIAL = "- Soft Serie";
Blockly.Msg.CAT_ARDUINO_moteur="↻ Motores stepper";
Blockly.Msg.CAT_ultrason = "⇣ Sensores";
Blockly.Msg.CAT_bluetooth = "☏ Bluetooth";
Blockly.Msg.CAT_ARDUINO_matrice8x8 = "░ Boca LED";
Blockly.Msg.CAT_ARDUINO_matrice16x8 = "░ Ojos LED";
Blockly.Msg.CAT_DFRobot_SHIELD_LCDKEYPAD = "▀ Pantalla LCD";
Blockly.Msg.CAT_iot = "☁ IoT";
Blockly.Msg.CAT_html = "✉ HTML";
Blockly.Msg.CAT_DFPLAYER = "♫ Audio";
Blockly.Msg.CAT_OTTO = "⊟ Otto";
Blockly.Msg.CAT_OTTOH = "⊟ Humanoide";
Blockly.Msg.CAT_MASAYLO="⊟ Masaylo";
Blockly.Msg.CAT_ESCORNABOT="⊟ Escornabot";
Blockly.Msg.CAT_OLED_U8G = "▀ OLED";
Blockly.Msg.CAT_NEOPIXEL = "☄ NeoPixel";

//Wireless
Blockly.Msg.esp8266_init_tooltip = "Inicialización del módulo wifi y conexión con los parámetros indicados";
Blockly.Msg.esp8266_1 = "Esp 8266";
Blockly.Msg.esp8266_2 = "SSID";
Blockly.Msg.esp8266_3 = "clave";
Blockly.Msg.esp8266_4 = "IP";
Blockly.Msg.esp8266_5 = "gateway";
Blockly.Msg.esp8266_6 = "mask";
Blockly.Msg.esp8266_7 = [["cliente", "client"], ["servidor", "server"]];
Blockly.Msg.esp8266_8 = "port";
Blockly.Msg.esp8266_9 = [["dinámica", "dynamic"], ["estática", "static"]];
Blockly.Msg.esp8266_10 = "dirección";
Blockly.Msg.esp8266_recept_tooltip = "recepción";
Blockly.Msg.esp8266_url = "https://github.com/OttoDIY/OttoDIYESP";// do not translate
Blockly.Msg.esp8266_html_tooltip = "";
Blockly.Msg.esp8266_send_html_tooltip = "";
Blockly.Msg.esp8266_send_html = "enviar página HTML ";
Blockly.Msg.esp8266_start_tooltip = "";
Blockly.Msg.esp8266_start = "Arrancar servidor";
Blockly.Msg.esp8266_request_tooltip = "";
Blockly.Msg.esp8266_request = "Si en la consulta encontramos";
Blockly.Msg.esp8266_request_container = "encontramos";
//INTERRUPTION
Blockly.Msg.LKL_ATTACHINTERRUPT_PIN = 'Interrupción: cuando ';
Blockly.Msg.LKL_DETACHINTERRUPT_PIN = "desactivar interrupción en pin ";
Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT = "Especifica la acción a tomar cuando una interrupción (de los 4 modos posibles) ocurre en el pin 2 or 3";
Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT = "Desactiva la interrupción externa previamente especificada";
Blockly.Msg.LKL_MODE = 'es detectada en el pin';
// FIELDDROPDOWN
Blockly.Msg.note = [[ "DO \u2083", "261"], [ "RE \u2083", "293"], [ "MI \u2083", "329"], [ "FA \u2083", "349"], [ "SOL \u2083", "392"], [ "LA \u2083", "440"], [ "SI \u2083", "493"], [ "DO \u2084", "523 "], [" RE \u2084 "," 587 "], [" MI \u2084 "," 659 "], [" FA \u2084 "," 698 "], [" SOL \u2084 "," 784 "], [ "LA \u2084", "880"]];
Blockly.Msg.tempo = [["\u266B", "125"], ["\u266A", "250"], ["\u2669", "500"], ["𝅗𝅥", "1000"], ["𝅝", "2000"]]; // do not translate
Blockly.Msg.on_off = [["activado", "LOW"], ["desactivado", "HIGH"]];
Blockly.Msg.menublink = [["despacio", "1000"], ["rápido", "100"]];
Blockly.Msg.AV_AR = [[Blockly.Msg.AV, "FORWARD"], [Blockly.Msg.AR, "BACKWARD"]]; // do not translate
Blockly.Msg.times = [["segundos", "s"], ["milisegundos", "m"], ["microsegundos", "u"]];
Blockly.Msg.time = [["segundos", "s"], ["milisegundos", "m"]];
Blockly.Msg.char_lcd = [[ "# 1", "1"], [ "# 2", "2"], [ "3", "3"], [ "# 4", "4"], [ "# 5", "5"], [ "# 6", "6"], [ "No. 7", "7"], [ "# 8", "8 "]];
Blockly.Msg.rxtx = [[ "2", "2"], [ "3", "3"], [ "4", "4"], [ "5", "5"], [ "6 "," 6 "], [" 7 "," 7 "], [" 8 "," 8 "], [" 9 "," 9 "], [" 10 "," 10 "], [" 11 "," 11 "], [" 12 "," 12 "], [" 13 "," 13 "]];
Blockly.Msg.FIELDDROPDOWN = [["Alto", Blockly.Msg.high], ["Bajo", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_0_1 = [["ALTO", Blockly.Msg.high], ["BAJO", Blockly.Msg.low]];
Blockly.Msg.ligne = [["1", "0"], ["2", "1"]];
Blockly.Msg.colonne = [[ "1", "0"], [ "2", "1"], [ "3", "2"], [ "4", "3"], [ "5 "," 4 "], [" 6 "," 5 "], [" 7 "," 6 "], [" 8 "," 7 "], [" 9 "," 8 "], [" 10 "," 9 "], [" 11 "," 10 "], [" 12 "," 11 "], [" 13 "," 12 "], [" 14 "," 13 "], [" 15 "," 14 "], [" 16 "," 15 "]];
Blockly.Msg.FIELDDROPDOWN_ONOFF = [["encender", Blockly.Msg.high], ["apagar", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_ONOFF_matrice = [["1", "true"], ["0", "false"]];
Blockly.Msg.FIELDDROPDOWN_av_ar = [[Blockly.Msg.AV, Blockly.Msg.high], [Blockly.Msg.AR, Blockly.Msg.low]];
Blockly.Msg.LKL_DROPDOWN = [['flanco ascendente', 'RISING'], ['flanco descendente', 'FALLING'], ['cambio de estado', 'CHANGE'], ['estado bajo', Blockly. Msg.low]];
Blockly.Msg.irq = [['flanco ascendente', 'Pin.IRQ_RISING'], ['flanco descendente', 'Pin.IRQ_FALLING'], ['estado alto', 'Pin.IRQ_HIGH_LEVEL'], ["estado bajo "," Pin.IRQ_LOW_LEVEL "]];
Blockly.Msg.menudht = [["humedad", "h"], ["temperatura", "t"]];
Blockly.Msg.couleur = [["azul", "blue"], ["amarillo", "yellow"], ["rojo", "red"], ["verde", "green"]];
Blockly.Msg.sens = [["adelante", "a"], ["derecha", "d"], ["izquierda", "g"]];
//sensor
Blockly.Msg.VL53L0X="Sensor de distancia láser";
Blockly.Msg.VL53L0X_tooltip="Inicializa el sensor.\nSensor <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.VL53L0X_distance="distancia medida por láser";
Blockly.Msg.VL53L0X_distance_tooltip="VL530X :\nDevuelve la distancia medida por láser en mm";
Blockly.Msg.bme280="Sensor de presión atmosférica";
Blockly.Msg.bme280_tooltip="Inicializa el sensor.\nSensor <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.bme280_pressure="presión atmosférica";
Blockly.Msg.bme280_pressure_tooltip="BME280 :\ndevuelve la presión atmosférica en hPa";
Blockly.Msg.inter="interruptor está";
Blockly.Msg.inter_tooltip="devuelve verdadero (falso) si el interruptor está o no en la posición indicada";
Blockly.Msg.mc005="presencia detectada en el pin";
Blockly.Msg.mc005_tooltip="MC005:\ndevuelve cierto o falso según detecte presencia";
Blockly.Msg.bp = "botón presionado en el pin";
Blockly.Msg.bp_tooltip = "devuelve cierto o falso según el botón esté o no presionado";
Blockly.Msg.dht11_tooltip="DHT11 :\ndevuelve la humedad detectada (de 20% a 80%)) o \n la temperatura (de 2 a 50 ºC)";
Blockly.Msg.dht22_tooltip = "DHT22: \ndevuelve la humedad detectada (de 0 a 100%) o \n la temperatura (de -40 a 80 ºC)";
Blockly.Msg.suiveur_ligne = "linea negra detectada en pin";
Blockly.Msg.suiveur_ligne_tooltip = "CAP227: \ndevuelve cierto o falso si se detecta o no el color negro";
Blockly.Msg.light = "brillo en el pin";
Blockly.Msg.light_tooltip = "devuelve un valor basado en el brillo \n0: oscuridad \n255: plena luz";
Blockly.Msg.hum = "humedad de suelo en el pin";
Blockly.Msg.hum_tooltip = "CAP 615: \ndevuelve la humedad del suelo de 0 a 100%";
Blockly.Msg.light_tooltip = "devuelve un valor que depende del brillo \n0: oscuridad \n255: plena luz";
Blockly.Msg.grove_ldr = "brillo en el pin";
Blockly.Msg.grove_ldr_tooltip = "devuelve el brillo detectado \n0: no hay luz \n100: luz muy intensa";
Blockly.Msg.potar = "posición del cursor en el pin";
Blockly.Msg.potar_tooltip = "devuelve un valor basado en la posición del potenciómetro \n0: sentido antihorario \n255: sentido horario (invertir alimentación si se comporta al revés)";
Blockly.Msg.lm35 = "temperatura en el pin";
Blockly.Msg.lm35_tooltip = "LM35: \ndevuelve la temperatura en º Celsius (from 0º to 80º)";
Blockly.Msg.ultrason_1 = "distancia < límite";
Blockly.Msg.ultrason_2 = "Devuelve ALTO (cierto) si la distancia es menor que el límite";
Blockly.Msg.ultrason_distance1 = "distancia medida por el sensor";
Blockly.Msg.ultrason_tooltip = "HC-SR04: \nSensor de ultrasonidos que permite medir distancias (de 3 cm hasta 4 m) \nindicar los pines de Arduino a los que se conectará TRIG y ECHO";
Blockly.Msg.ultrason = "pines de ultrasonidos";
Blockly.Msg.ultrason_distance2 = "HC-SR04: \ndevuelve la distancia medida en cm por el sensor";
Blockly.Msg.ultrason_helpurl = "https://wikifactory.com/+OttoDIY/otto-diy"; // do not translate
Blockly.Msg.pir = "movimiento detectado ";
Blockly.Msg.feu = "llama detectada ";
Blockly.Msg.presence = "obstáculo detectado ";
Blockly.Msg.appui = "toque ";
Blockly.Msg.pir_tooltip = "HC-SR501: \ndevuelve cierto o falso si se detecta o no distancia";
Blockly.Msg.feu_tooltip = "CAP168: \ndevuelve cierto o falso si se detecta o no una llama";
Blockly.Msg.presence_tooltip = "CAP711: \ndevuelve cierto o falso si ha sucedido o no un contacto";
Blockly.Msg.appui_tooltip = "CAP831: \ndevuelve cierto o falso si se ha detectado o no soporte";
// bluetooth
Blockly.Msg.bluetooth1 = "si los datos recibidos por bluetooth";
Blockly.Msg.bluetooth1_tooltip = "recepción de datos bluetooth \nconectar HC-06 a los pines 0 y 1 \ncruzando Rx y Tx";
Blockly.Msg.bluetooth2 = "enviar por bluetooth";
Blockly.Msg.bluetooth2_tooltip = "envía datos por bluetooth \nconectar HC-06 a los pines 0 y 1 \ncruzando Rx y Tx";
Blockly.Msg.bluetooth_init_tooltip = "";
Blockly.Msg.bluetooth_helpurl = "https://wikifactory.com/+OttoDIY/otto-diy-plus"; // do not translate
//LCD screen
Blockly.Msg.lcd_fond = "fondo";
Blockly.Msg.LCD = "pantalla LCD";
Blockly.Msg.LCDi2c_tooltip = "inicializa la pantalla LCD de 2 líneas y 16 caracteres por I2C con fondo RGB. \n Displayer <-> Arduino \nSDA <--------> A4 \nSCL <- -------> A5 ";
Blockly.Msg.LCD_tooltip = "initializes the LCD, 2 lines and 16 characters, indicating the pins to connect";
Blockly.Msg.LCD_SHIELD_PRINT_HELPURL = "https://www.arduino.cc/en/Tutorial/HelloWorld";// do not translate
Blockly.Msg.LCD_SHIELD_PRINT_TEXT = "mostrar en pantalla";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT_tooltip = "muestra el texto en la posición especificada";
Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP = "escribe el texto(/s) en la pantalla LCD";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT1 = "línea 1";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT2 = "línea 2";
Blockly.Msg.LCD_line = "línea";
Blockly.Msg.LCD_col = "columna";
Blockly.Msg.LCD_raz = "borra pantalla";
Blockly.Msg.LCD_raz_tooltip = "borra la pantalla, claro";
Blockly.Msg.lcd_aff_symbole = "muestra el símbolo";
Blockly.Msg.lcd_aff_symbole_tooltip = "muestra el símbolo previamente definido";
Blockly.Msg.lcd_symbole = "define el símbolo";
Blockly.Msg.lcd_symbole_tooltip = "para dibujar: \n 0 apaga el píxel \n 1 enciende el píxel";
// structure
Blockly.Msg.loop = "∞ Bucle";
Blockly.Msg.init = "⚙️ Configuración";
Blockly.Msg.base_setup_loop = "La función de configuración(setup) : \nSe usa para inicializar variables e indicar qué pines usaremos ... \nSólo se ejecuta una vez\nLa función de bucle(loop): \nEs la parte principal del programa. Los bloques situados aquí se ejecutarán en orden, en un bucle infinito, varias veces por segundo ";
Blockly.Msg.loop_tooltip = "Los bloques situados aquí se ejecutarán en orden, en un bucle infinito, varias veces por segundo";
Blockly.Msg.begin_tooltip = "este bloque se utiliza para definir el orden en que el programa debería ejecutarse";
Blockly.Msg.begin = "🏁 ARRANQUE";
Blockly.Msg.def = "⚙️ Declaración";
Blockly.Msg.def_tooltip = "Todos los bloques situados aquí se ejecutarán sólo una vez. Aquí es donde se configuran sensores y actuadores";
Blockly.Msg.END = "🏁 FIN";
Blockly.Msg.END_tooltip = "Finaliza el programa. Los bloques conectados después se ignorarán";
Blockly.Msg.code_tooltip = "Para escribir código en C++ no contenido en los bloques";
//matrix
Blockly.Msg.matriceLC = "LED X";
Blockly.Msg.matrice_create_aff = "Create block 'display symbol %1'";
Blockly.Msg.matrice_create_symbole = "Create the block 'set the symbol %1'";
Blockly.Msg.matrice = "matrix";
Blockly.Msg.matrice8x8_tooltip = "Initialisation of the matrix to 64 LEDs, it is necessary to indicate the pins of the arduino to which will be connected DIN, CLK, CS";
Blockly.Msg.matrice8x8_symbole = "define the symbol";
Blockly.Msg.matrice8x8_symbole_tooltip = "definition of a symbol for the matrix: \n 0 turn off an LED \n 1 turn on an LED";
Blockly.Msg.matrice8x8_efface = "erase the matrix";
Blockly.Msg.matrice8x8_aff = "display the symbol";
Blockly.Msg.matrice8x8_binaire_tooltip = "1 turns on an LED of the matrix and 0 turns it off";
Blockly.Msg.matrice8x8_del_tooltip = "Turns on (off) an LED in the array indicating its coordinates \nCaution dialing starts at 0";
Blockly.Msg.matrice8x8_aff_tooltip = "Display the symbol that has been previously defined";
Blockly.Msg.matrice8x8_efface_tooltip = "Turn off all LEDs in the matrix";
Blockly.Msg.matrice8x8_helpurl = "https://xantorohara.github.io/led-matrix-editor/";// do not translate
Blockly.Msg.matrice16x8_tooltip = "Initialization of the array to 128 LEDs. \nMatrix <-> Arduino \nSDA <--------> A4 \nSCL <--------> A5";
Blockly.Msg.matrice16x8_symbole = "define the symbol";
Blockly.Msg.matrice16x8_symbole_tooltip = "definition of a symbol for the matrix: \n 0 turns off an LED \n 1 turns on an LED";
Blockly.Msg.matrice16x8_efface = "turn off the LEDs of the matrix";
Blockly.Msg.matrice16x8_aff = "display the symbol";
Blockly.Msg.matrice16x8_binaire_tooltip = "1 turns on an LED of the matrix and 0 turns it off";
Blockly.Msg.matrice16x8_del_tooltip = "Turns on (off) an LED in the matrix indicating its coordinates \nCaution dialing starts at 0";
Blockly.Msg.matrice16x8_aff_tooltip = "Display the symbol that has been previously defined";
Blockly.Msg.matrice16x8_efface_tooltip = "Turn off all LEDs in the matrix";
Blockly.Msg.matrice16x8_helpurl = "";
//time
Blockly.Msg.millis ="tiempo transcurrido";
Blockly.Msg.millis_start="empieza a contar tiempo";
Blockly.Msg.millis_tooltip="";
Blockly.Msg.millis_start_tooltip="";
Blockly.Msg.ARDUINO_INOUT_Pulsein = "devuelve la duración en microsegundos de un pulso en el pin indicado. Si el parámetro indicado es HIGH(alto), por ejemplo, espera hasta que aparece un 1 en el pin y entonces empieza a contar hasta que aparezca un 0 ";
Blockly.Msg.ARDUINO_BASE_DELAY = "⏲ esperar";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "Especifica el tiempo de espera en segundos, milisegundos o microsegundos. \nEl programa se para durante este tiempo";
Blockly.Msg.millis1 = "duración en";
Blockly.Msg.millis2 = "desde el principio";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP = "devuelve la duración en la unidad especificada desde que el programa arrancó";
Blockly.Msg.ARDUINO_PULSEIN = "duración de pulso";
Blockly.Msg.tempo_helpurl = "https://www.arduino.cc/en/tutorial/blink";// do not translate
Blockly.Msg.tempo_tooltip = "Este bloque comprueba si ha pasado el tiempo indicado, si es así ejecuta el bloque/s contenidos." ;
Blockly.Msg.tempo1 = "todo";
//OLED
Blockly.Msg.lp2i_u8g_draw_string = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_string_Text = "text to display =";
Blockly.Msg.lp2i_u8g_draw_string_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_draw_string_Y = "line y (63 max) =";
Blockly.Msg.lp2i_u8g_draw_4strings = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_4strings_texts_to_display = "texts to display :";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line1 = "line 1 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line2 = "line 2 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line3 = "line 3 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line4 = "line 4 =";
Blockly.Msg.lp2i_u8g_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_print_N = "Number to display ="
Blockly.Msg.lp2i_u8g_print_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_print_Y = "line y (63 max) =";
Blockly.Msg.lp2i_u8g_4draw_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_4draw_print_to_display = "to display :";
Blockly.Msg.lp2i_u8g_4draw_print_Text_line1 = "line 1 =";
Blockly.Msg.lp2i_u8g_4draw_print_N1 = "Number 1 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line2 = "line 2 =";
Blockly.Msg.lp2i_u8g_4draw_print_N2 = "Number 2 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line3 = "line 3 =";
Blockly.Msg.lp2i_u8g_4draw_print_N3 = "Number 3 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line4 = "line 4 =";
Blockly.Msg.lp2i_u8g_4draw_print_N4 = "Number 4 (at end) ="
// LED
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "El LED de tarjeta";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "Enciende o apaga el LED montado sobre la tarjeta (normalmente asociado al pin 13)";
Blockly.Msg.blink = "parpadeo del LED";
Blockly.Msg.blink_tooltip = "El LED en la tarjeta parpadea 1 o 10 veces por segundo";
Blockly.Msg.del = "el LED en el pin ";
Blockly.Msg.del_tooltip = "enciende o apaga el LED en el pin especificado";
Blockly.Msg.bargraphe = "barra gráfica";
Blockly.Msg.bargraphe_allume="enciende LEDs en ";
Blockly.Msg.bargraphe_allume_tooltip="0 apaga LEDs \n2,5 enciende los dos primeros LEDs y el tercero a medias \n10 enciende todos los LEDs";
Blockly.Msg.bargraphe_tooltip = "módulo de barra compuesto de 10 LEDs (8 verdes, 1 amarillo y 1 rojo), hay que indicar los pines de arduino en los que se conectará DCKI y DI";
Blockly.Msg.rvb_init="LED RGB";
Blockly.Msg.rvb_init_tooltip="indicar los pines con capacidad PWM a los que se conectará el RGB";
Blockly.Msg.rvb_set="mostrar color";
Blockly.Msg.rvb_set_tooltip="muestra el color indicando el valor RGB";
Blockly.Msg.pixel1 = "NeoPixel";
Blockly.Msg.pixel2 = "mostrar píxels";
Blockly.Msg.pixel3 = "color";
Blockly.Msg.pixel4 = "# de pixels";
Blockly.Msg.pixel5 = "poner brillo de píxeles a ";
Blockly.Msg.pixel6 = "píxel #";
Blockly.Msg.pixel1_tooltip="módulo de neopixel RGB indicar el pin al que se conecta y el número de píxeles";
Blockly.Msg.pixel2_tooltip="mostrar cambios";
Blockly.Msg.pixel5_tooltip="ajustar brillo de píxeles(de 0 a 255)";
Blockly.Msg.pixel3_tooltip="elige el píxel a encender y su color \n¡Ojo! El primer número es 0";
// output
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "poner el pin DIGITAL a ";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "escribe un 1 ó 0 lógico en la salida especificada";
Blockly.Msg.toggle = "cambiar el estado del pin ";
Blockly.Msg.toggle_tooltip = "Cambiar: \n pone un 1 si había un 0 y viceversa en el pin indicado";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "valor PWM en pin ";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "envía un valor entre 0 y 255 para emular una señal analógica en el pin especificado";
// input
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "estado digital del pin ";
Blockly.Msg.in_pullup = "Pull-Up";
Blockly.Msg.in_pullup_tooltip = "devuelve el estado lógico (0 o 1) del pin indicado \ndevuelve 1 (high/alto)por defecto si se ha activado la opción pull-up";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "lee el estado lógico (0 ó 1) del pin digital";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "valor ANALÓGICO en pin ";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "devuelve un valor entre 0 y 1023 equivalente a la lectura entre 0 y 5 V";
// audio
Blockly.Msg.play = "interpretar";
Blockly.Msg.play_tooltip = "tocar la nota";
Blockly.Msg.play_helpurl = "";
Blockly.Msg.beep = "zumbido en el pin ";
Blockly.Msg.beep_TOOLTIP = "emite un zumbido (a 440Hz durante 1 sg) en el pin especificado";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "emite un sonido en el pin";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "frecuencia (Hz)";
Blockly.Msg.ARDUINO_TONE_INPUT3 = "duración (ms)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "emite un sonido en el pin seleccionado, a la frecuencia indicada, durante el tiempo requerido";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "parar sonido en el pin ";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "silencia el sonido";
Blockly.Msg.lp2i_mp3_helpurl = "https://wiki.dfrobot.com/DFPlayer_Mini_SKU_DFR0299";// do not translate
Blockly.Msg.lp2i_mp3_Volume = "volumen [0-48]";
Blockly.Msg.lp2i_mp3_autoplay = "AutoPlay";
Blockly.Msg.lp2i_mp3 = "Reproductor MP3";
Blockly.Msg.lp2i_mp3_tooltip = "DFPlayer Mini mp3: \ninicialización del módulo, volumen y modo de operación \nMódulo MP3 <-> Arduino \nRx (2) <------------- -> Tx (1) ";
Blockly.Msg.lp2i_mp3_play = "reproducir el archivo mp3";
Blockly.Msg.lp2i_mp3_play_track_tooltip = "reproducir la canción";
Blockly.Msg.lp2i_mp3_play_tooltip = "toca la cancióng";
Blockly.Msg.lp2i_mp3_pause = "pausar archivo mp3";
Blockly.Msg.lp2i_mp3_pause_tooltip = "para la canción";
Blockly.Msg.lp2i_mp3_prev = "leer archivo mp3 previo";
Blockly.Msg.lp2i_mp3_prev_tooltip = "toca la canción anterior";
Blockly.Msg.lp2i_mp3_vol = "poner volumen a";
Blockly.Msg.lp2i_mp3_vol_tooltip = "pone el volumen en el valor indicado [0-48]";
Blockly.Msg.lp2i_mp3_next = "leer siguiente archivo mp3";
Blockly.Msg.lp2i_mp3_next_tooltip = "toca la siguiente canción";
// servomotor
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1 = "rotar";
Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE = "ángulo [0°-180°]";
Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP = "posible rotación entre 0 y 180 º";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT = "giro";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP = "Mueve el servo conectado en el pin, a la velocidad indicada [0-90] y en la dirección seleccionada";
//engine
Blockly.Msg.mot_tooltip = "Controlador de motor DC L293D: \n Activa ambos motores (M1 y M2) para avanzar o girar, la velocidad se puede configurar entre 0 y 90";
Blockly.Msg.mot_stop = "parar";
Blockly.Msg.mot_stop_tooltip = "Circuito para motores DC L293D : \nparar ambos motores (M1 y M2)";
Blockly.Msg.moteur = "activar motor";
Blockly.Msg.moteurstop = "parar motor";
Blockly.Msg.moteur_tooltip = "arranca el motor DC conectado al pin especificado, a la velocidad indicada \velocidad = 0 -> motor parado";
Blockly.Msg.moteurdagu_tooltiprs040 = "Tarjeta RS 040: \n activa una de las dos salidas para manejar motores DC, la velocidad se puede ajustar entre 0 y 90";
Blockly.Msg.moteurdagu_tooltiprs040stop = "Tarjeta RS 040: \nparar uno de los dos motores";
Blockly.Msg.moteurdagu_tooltiprs027 = "Tarjeta RS 027: \n maneja una de las dos salidas para conducir motores DC, la velocidad se puede ajustar entre 0 y 90";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR1 = "v1 - DC Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR2 = "v2 - DC Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION = "dirección";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_VITESSE = Blockly.Msg.vitesse+"[0-255]";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT = "adelante";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE = "atrás";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP = "paro";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP1 = "v1 - Motor paso a paso";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP2 = "v2 - Motor paso a paso";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_CONNECT = "pin";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_PPT = "not per turn";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_RPM = "velocidad (RPM)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_NB_PAS = "número de pasos";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC1 = "DC 1 motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC2 = "DC 2 motor";
Blockly.Msg.m_pap="motor paso a paso";
Blockly.Msg.m_pap_step="paso";
Blockly.Msg.m_pap_step1="mover adelante";
Blockly.Msg.m_pap_tooltip = "Inicialización de un motor paso a paso (stepper). \nIndique nº de pasos, velocidad en rpm y pines a conectar";
Blockly.Msg.m_pap_step_tooltip = "Activa el motor paso a paso con el nº de pasos indicado, la siguiente instrucción se ejecutará sólamente una vez haya finalizado la rotación.";
// serial
Blockly.Msg.Serial_Init = "Puerto serie activado";
Blockly.Msg.Serial_Init_tooltip = "Ajustar la velocidad de comunicación en baudios";
Blockly.Msg.Serial_Write = "enviar a puerto serie";
Blockly.Msg.Serial_write_tooltip = "Enviar datos a puerto serie";
Blockly.Msg.Serial_read = "datos leídos en puerto serie";
Blockly.Msg.Serial_read_tooltip = "devuelve los datos existentes en el puerto serie si los hay, si no devuelve -1";
Blockly.Msg.Serial_available = "cantidad de datos en puerto serie";
Blockly.Msg.Serial_available_tooltip = "devuelve el nº de bytes disponibles en el puerto serie, o 0 si no hay datos.";
Blockly.Msg.Serial_saut = "retorno de carro";
Blockly.Msg.Serial_saut_tooltip = "pasa a la línea siguiente en el monitor del puerto serie";
Blockly.Msg.Serial_space = "separador";
Blockly.Msg.Serial_space_tooltip = "devuelve un espacio en el monitor del puerto serie";
Blockly.Msg.repl_read = "comando introducido por usuario";
// software serial
Blockly.Msg.SSERIAL_Init = "puerto emulado por software Rx";
Blockly.Msg.SSERIAL_tooltip = "Crea un nuevo puerto de comunicaciones emulado por software en los pines y a la velocidad especificados";
Blockly.Msg.SSERIAL_Read = "datos leídos en el puerto software";
Blockly.Msg.SSERIAL_Read_tooltip = "devuelve el primer byte de datos de entrada disponibles en el puerto emulado por software, o -1 si no hay datos";
Blockly.Msg.SSERIAL_Write = "enviar al puerto software";
Blockly.Msg.SSERIAL_Write_tooltip = "Envía datos al puerto emulado por software";
Blockly.Msg.SSERIAL_Read_tooltip = "devuelve el primer byte de datos disponibles en el puerto serie emulado por software, o -1 si no hay datos";
Blockly.Msg.SSERIAL_Available = "cantidad de datos en el puerto serie";
Blockly.Msg.SSERIAL_Available_tooltip = "devuelve el nº de bytes disponibles en el puerto emulado por software, o 0 si no hay datos.";
////////////OTTO DIY Robot////////// ONLY TRANSLATE THE LEFT PART INSIDE ["THIS YES" ,NOT]
Blockly.Msg.OTTO9_HOME_TEXT = "firme";
Blockly.Msg.OTTO9_HOME_TOOLTIP = "Otto se pone firme";
Blockly.Msg.OTTO9_DIY_URL = "https://wikifactory.com/+OttoDIY/otto-diy";// do not translate
Blockly.Msg.OTTO9_HUMANOID_URL = "https://wikifactory.com/+OttoDIY/humanoid";// do not translate
Blockly.Msg.OTTO9_CALIBRATION='calibrar';
Blockly.Msg.OTTO9_CALIBRATION_LEG='pierna ';
Blockly.Msg.OTTO9_CALIBRATION_FOOT='pie ';
Blockly.Msg.OTTO9_CALIBRATION_ARM='brazo ';
Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP='usar pequeños valores positivos o negativos para compensar en parte posibles desviaciones(0º/90º)';
Blockly.Msg.OTTO9_EEPROM_TEXT= 'guardar calibraciones en memoria EEPROM';
Blockly.Msg.OTTO9_EEPROM_TOOLTIP= 'Use only after completely straight(90º) one time, delete this BLOCK after for further programming';
Blockly.Msg.OTTO9_MOVE_TEXT = "mover";
Blockly.Msg.OTTO9_MOVE_TOOLTIP = "movimientos básicos de Otto";
Blockly.Msg.OTTO9_MOVE_CHOICE = [["↑ adelante", "FORWARD"], ["↓ atrás", "BACKWARD"], ["↺ girar a izquierda", "LEFT"], ["↻ girar a derecha", "RIGHT"], ["inclinar a izquierda", "BENDLEFT"], ["inclinar a derecha", "BENDRIGHT"], ["sacudir pierna izquierda", "SHAKELEFT"], ["sacudir pierna derecha", "SHAKERIGHT"], ["salto", "jump"]];
Blockly.Msg.OTTO9_MOVEW_CHOICE = [["↑ forward", "FORWARD"], ["↓ backward", "BACKWARD"], ["↺ turn left", "LEFT"], ["↻ turn right", "RIGHT"]];
Blockly.Msg.OTTO9_MOVE_SPEED_TEXT = "velocidad";
Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE = [["normal", "1000"],["baja", "2000"],["muy baja", "3000"] , ["rápida", "750"], ["muy rápida", "500"], ["supersónica", "250"]];
Blockly.Msg.OTTO9_MOVEW_SPEED_CHOICE = [["normal", "45"],["baja", "20"],["muy baja", "10"] , ["rápida", "60"], ["muy rápida", "90"]];
Blockly.Msg.OTTO9_DANCE_TEXT = "bailar";
Blockly.Msg.OTTO9_DANCE_TOOLTIP = "¡Otto baila!";
Blockly.Msg.OTTO9_DANCE_CHOICE = [["moonwalk ⟵", "moonwalkerLEFT"],  ["moonwalk ⟶", "moonwalkerRIGHT"],["crusaíto ⟵", "crusaitoLEFT"],["crusaíto ⟶", "crusaitoRIGHT"], ["aleteo ↑", "flappingFRONT"], ["aleteo ↓", "flappingBACK"]];
Blockly.Msg.OTTO9_DANCE_SIZE_TEXT = "tamaño";
Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE = [["normal", "25"], ["pequeño", "10"], ["grande", "40"]];
Blockly.Msg.OTTO9_DO_TEXT = "hacer";
Blockly.Msg.OTTO9_DO_TOOLTIP = "movimientos más complejos de Otto";
Blockly.Msg.OTTO9_DO_CHOICE = [ ["swing", "swing"], ["arribabajo", "updown"], ["sacudetalones", "tiptoeSwing"], ["cosquilleo", "jitter"], ["giroascendente", "ascendingTurn"]];
Blockly.Msg.OTTO9_GESTURE_TEXT = "gesto";
Blockly.Msg.OTTO9_GESTURE_TOOLTIP = "movimientos combinados con sonidos que dotan a Otto de emociones propias";
Blockly.Msg.OTTO9_GESTURE_CHOICE = [["😃 feliz1", "OttoSuperHappy"],["🙂 feliz2", "OttoHappy"], ["🙁 triste", "OttoSad"], ["😴 dormido", "OttoSleeping"], ["😕 confuso", "OttoConfused"], ["😰 atemorizado", "OttoFretful"], ["😍 amor", "OttoLove"], ["😡 enfadado", "OttoAngry"], ["🤩 magia", "OttoMagic"], ["😐 ola", "OttoWave"], [" 😎 victoria", "OttoVictory"], ["😞 fallo", "OttoFail"], ["💩 pedo", "OttoFart"]];
Blockly.Msg.OTTO9_SOUND_TEXT = "sonido";
Blockly.Msg.OTTO9_SOUND_TOOLTIP = "Sonidos emocionales";
Blockly.Msg.OTTO9_SOUND_CHOICE = [ ["😃 feliz1", "S_superHappy"], ["🙂 feliz2", "S_happy"], ["😊 feliz3", "S_happy_short"], ["🙁 triste", "S_sad"], ["😕 confuso", "S_confused"], ["🤗 animado", "S_cuddly"], ["😮 Oh", "S_OhOoh"], ["😯 OhOoh", "S_OhOoh2"], ["😲 sorpresa", "S_surprise"],["🤖 conectado", "S_connection"], [" 🤖 disconectado", "S_disconnection"], ["👇 empujar", "S_buttonPushed"], ["❗ 1", "S_mode1"], ["❗❗ 2", "S_mode2"], ["❗❗❗ 3", "S_mode3"], ["💤 dormido", "S_sleeping"], ["💩 pedo1", "S_fart1"], ["💩 pedo2", "S_fart2"], ["💩 pedo3", "S_fart3"],];
Blockly.Msg.OTTO9_GETDISTANCE_TEXT = "distancia [cm]";
Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP = "Distancia medida de 2cm a 400cm";
Blockly.Msg.OTTO9_GETOBSTACLE_TEXT = "obstáculo";
Blockly.Msg.OTTO9_OBSTACLE_CHOICE = [["cerca", "10"],["muy cerca", "3"],["lejos", "30"]];
Blockly.Msg.OTTO9_GETNOISE_TEXT = "sonido medido";
Blockly.Msg.OTTO9_GETNOISE_TOOLTIP = "100 es silencioso, 500 sonido normal y más de 100 se considera ruido, pero hay que ajustar el potenciómetro del sensor";
Blockly.Msg.OTTO9_GETTOUCH_TEXT = "toque";
Blockly.Msg.OTTO9_GETTOUCH_TOOLTIP = "Devuelve verdadero si se toca el sensor";
Blockly.Msg.OTTO9_GETG_TEXT = "movimiento";
Blockly.Msg.OTTO9_MOUTH_TEXT = "boca";
Blockly.Msg.OTTO9_MOUTH_TOOLTIP = "gestos en boca para la matriz LED 8x8 #0-30";
Blockly.Msg.OTTO9_MOUTH_CHOICE = [["😃 feliz1", "happyOpen"],["🙂 feliz2", "happyClosed"], ["😊 sonríe", "smile"], ["😦 triste1", "23"], ["🙁 triste2", "24"], ["😮 sorpresa", "smallSurprise"], ["😲 sorpresa2", "bigSurprise"], ["😕 confuso", "confused"],["😛 lengua", "tongueOut"],["🙃 travieso", "culito"],  ["😑 serio", "lineMouth"], ["🙄 nervioso", "21"], ["💖 corazón", "heart"], ["🦇 murciélago", "vamp1"], ["🦇 murciélago2", "vamp2"], ["❌ no", "xMouth"], ["✅ OK", "okMouth"],["❓?", "27"], ["⚡ trueno", "thunder"]];
Blockly.Msg.OTTO9_EYES_TEXT = "ojos";
Blockly.Msg.OTTO9_EYES_TOOLTIP = "Movimiento de ojos para la matriz 16x8 i2C LED  ";
Blockly.Msg.OTTO9_EYES_CHOICE = [["😃 happy1", "happy_bmp"],["🙂 happy2", "eyes_bmp"], ["😦 sad", "sad_bmp"], ["😡 angry1", "angry_bmp"], ["😡 angry2", "angry2_bmp"], ["😰 freetful", "freetful_bmp"], ["😕 confused", "confused_bmp"],["😴 sleep", "sleep_bmp"],["😍 love", "love_bmp"],  ["😑 wave", "wave_bmp"], ["🤩 magic", "magic_bmp"], ["😞 fail", "fail_bmp"], ["🤖 logo", "logo_bmp"], ["❌❌ no", "XX_bmp"], ["x x", "xx_bmp"],["▉", "full_bmp"]];
Blockly.Msg.OTTO9_EYESTEXT_TEXT = "texto en pantalla de ojos";
Blockly.Msg.OTTO9_EYES_CLEAR_TEXT = " limpiar ojos";
Blockly.Msg.OTTO9_MATRIX_TOOLTIP = "limitado a MAYÚSCULAS A a Z NÚMEROS 0 a 9 : ; < >  = @, max.9 caracteres";
Blockly.Msg.OTTO9_MATRIXTEXT_TEXT = "texto en boca";
Blockly.Msg.OTTO9_CLEAR_TEXT = " limpiar boca";
Blockly.Msg.OTTO9_CLEAR_TOOLTIP = "Apaga todos los LED de la matriz 8x8 en la boca";
Blockly.Msg.OTTO9_ARMS_TEXT = "brazos";
Blockly.Msg.OTTO9_ARMS_TOOLTIP = "¡Mueve los brazos!";
Blockly.Msg.OTTO9_ARMS_CHOICE = [["manos arriba", "HANDSUP"], ["saluda izquierda", "HANDWAVE1"], ["saluda derecha", "HANDWAVE2"]];
////////////MASAYLO Robot////////// ONLY TRANSLATE THE LEFT PART INSIDE ["THIS YES" ,NOT]
Blockly.Msg.MASAYLO_START_TEXT = "Inicio";
Blockly.Msg.MASAYLO_START_TOOLTIP = "Declara un nuevo robot de clase Masaylo";
Blockly.Msg.MASAYLO_URL = "https://github.com/agomezgar/masaylo";// do not translate
Blockly.Msg.MASAYLO_STARTPERS_TEXT="Inicio en pins:"
Blockly.Msg.MIA="Rueda izquierda A: ";
Blockly.Msg.MIB="Rueda izquierda B: ";
Blockly.Msg.MDA="Rueda derecha A: ";
Blockly.Msg.MDB="Rueda derecha B: ";
Blockly.Msg.MASAYLO_STARTPERS_TOOLTIP="Indicar los pines si no se ha conectado de modo distinto al requerido por defecto";
Blockly.Msg.MASAYLO_STARTPERS_URL="https://github.com/agomezgar/masaylo/blob/master/pinout/pinoutMasaylo.png";
Blockly.Msg.MASAYLO_MOVER_TEXT="Mover: ";
Blockly.Msg.MASAYLO_MOVE_CHOICE = [["↑ adelante", "FORWARD"], ["↓ atrás", "BACKWARD"], ["↺ giro izquierda", "LEFT"], ["↻ giro derecha", "RIGHT"], ["paro", "STOP"]];
Blockly.Msg.MASAYLO_VELOCITY_CHOICE = [["a tope", "TOP"], ["rápido", "QUICK"], ["normal", "MEDIUM"], ["lento", "SLOW"], ["casi parado", "SLOWER"]];

Blockly.Msg.MASAYLO_MOVER_TOOLTIP="¡Elige bien!";
Blockly.Msg.MASAYLO_BTINIT_TEXT="Inicializar el controlador BT";
Blockly.Msg.MASAYLO_Tx_TEXT="Tx: ";
Blockly.Msg.MASAYLO_Rx_TEXT="Rx: ";
Blockly.Msg.MASAYLO_BT_TOOLTIP="¿Quieres comunicación inalámbrica?";
Blockly.Msg.MASAYLO_GETDISTANCE_TEXT="Distancia: ";
Blockly.Msg.MASAYLO_GETDISTANCE_TOOLTIP="Usa un sensor de ultrasonidos para detectar obstáculos";
Blockly.Msg.MASAYLO_GETBLACKLEFT_TEXT="Negro en sensor izquierdo";
Blockly.Msg.MASAYLO_GETBLACKLEFT_TOOLTIP="Devuelve 'verdadero' si el sensor izquierdo detecta el color negro";
Blockly.Msg.MASAYLO_GETBLACKRIGHT_TEXT="Negro en sensor derecho";
Blockly.Msg.MASAYLO_GETBLACKRIGHT_TOOLTIP="Devuelve 'verdadero' si el sensor derecho detecta el color negro";
Blockly.Msg.MASAYLO_GETBLANKLEFT_TEXT="Blanco en sensor izquierdo";
Blockly.Msg.MASAYLO_GETBLANCKLEFT_TOOLTIP="Devuelve 'verdadero' si el sensor izquierdo detecta el color blanco";
Blockly.Msg.MASAYLO_GETBLANKRIGHT_TEXT="Blanco en sensor derecho";
Blockly.Msg.MASAYLO_GETBLANKRIGHT_TOOLTIP="Devuelve 'verdadero' si el sensor derecho detecta el color blanco";
Blockly.Msg.MASAYLO_FORWARD_TEXT="Adelante";
Blockly.Msg.MASAYLO_FORWARD_TOOLTIP="Masaylo irá hacia adelante hasta nueva orden";
Blockly.Msg.MASAYLO_BACKWARD_TEXT="Atrás";
Blockly.Msg.MASAYLO_BACKWARD_TOOLTIP="Masaylo irá hacia atrás hasta nueva orden";
Blockly.Msg.MASAYLO_LEFT_TEXT="Giro izquierda";
Blockly.Msg.MASAYLO_LEFT_TOOLTIP="Masaylo empezará a girar hacia la izquierda (antihorario visto desde arriba) hasta nueva orden";
Blockly.Msg.MASAYLO_RIGHT_TEXT="Giro derecha";
Blockly.Msg.MASAYLO_RIGHT_TOOLTIP="Masaylo empezará a girar hacia la derecha (sentido horario visto desde arriba) hasta nueva orden";
Blockly.Msg.MASAYLO_STOP_TEXT="Alto";
Blockly.Msg.MASAYLO_STOP_TOOLTIP="¿No está claro?";
Blockly.Msg.MASAYLO_VELOCIDAD_TEXT="Mover a velocidad: ";
////////////ESCORNABOT Robot////////// ONLY TRANSLATE THE LEFT PART INSIDE ["THIS YES" ,NOT]
Blockly.Msg.ESCORNABOT_MODE_TEXT="Iniciar Escornabot";
Blockly.Msg.ESCORNABOT_MODE_CHOICE= [["Débil", ""], ["Fuerte", "(2)"], ["Intermedio", "(3)"]];;
Blockly.Msg.ESCORNABOT_INIT_TOOLTIP="Elegir un modo: 1-> Débil pero menos consumo, 2->Fuerte pero mayor consumo, 3->Modo intermedio ";
Blockly.Msg.ESCORNABOT_URL="https://escornabot.com/es/index";
Blockly.Msg.ESCORNABOT_SPIN="Mover por vueltas: ";
Blockly.Msg.ESCORNABOT_SPIN_NUMBER="Nº: ";
Blockly.Msg.ESCORNABOT_SPIN_TOOLTIP="Indicar número de vueltas y velocidad en rpm (las vueltas negativas indican que irá hacia atrás)"
Blockly.Msg.ESCORNABOT_SPIN_VELOCITY_TEXT="Velocidad: "
Blockly.Msg.ESCORNABOT_SPIN_VELOCITY=[["Lento", "5"], ["Intermedio", "10"], ["Rápido", "15"]];;
Blockly.Msg.ESCORNABOT_DISTANCE="Recorrer distancia: ";
Blockly.Msg.ESCORNABOT_DISTANCE_TEXT="cm: ";
Blockly.Msg.ESCORNABOT_DISTANCE_TOOLTIP="Indicar la distancia en cm (valores negativos indican sentido contrario) y la velocidad";
Blockly.Msg.ESCORNABOT_TURNSPIN_TEXT="Girar por vueltas: ";
Blockly.Msg.ESCORNABOT_TURNSPIN_TOOLTIP="Gira en sentido horario o antihorario (según introduzcamos valores positivos o negativos). Indicar nº de vueltas y velocidad";
Blockly.Msg.ESCORNABOT_TURNANGLE_TEXT="Girar por ángulo: ";
Blockly.Msg.ESCORNABOT_ANGLE_NUMBER="Ángulo: "
Blockly.Msg.ESCORNABOT_TURNANGLE_TOOLTIP="Indicar el ángulo de giro (el signo del valor se refiere al sentido de giro) y la velocidad";
Blockly.Msg.ESCORNABOT_STOP_TEXT="Paro";
Blockly.Msg.ESCORNABOT_STOP_TOOLTIP="El escornabot se para, claro...";
Blockly.Msg.ESCORNABOT_BEEP_TEXT="Zumbido";
Blockly.Msg.ESCORNABOT_TIME_TEXT="ms";
Blockly.Msg.ESCORNABOT_BEEP_TOOLTIP="Emite un zumbido durante el tiempo especificado en milisegundos";
Blockly.Msg.ESCORNABOT_LEDON_TEXT="Encender led: ";
Blockly.Msg.ESCORNABOT_LEDOFF_TEXT="Apagar led: ";
Blockly.Msg.ESCORNABOT_LED_CHOICE=[["Delante", "1"], ["Atrás", "3"], ["Izquierda", "2"],["Derecha", "4"]];;
Blockly.Msg.ESCORNABOT_LEDON_TOOLTIP="Enciende el led seleccionado";
Blockly.Msg.ESCORNABOT_LEDOFF_TOOLTIP="Apaga el led seleccionado";
Blockly.Msg.ESCORNABOT_GETBUTTON_TEXT="Pulsador detectado: ";
Blockly.Msg.ESCORNABOT_GETBUTTON_TOOLTIP="Comprueba si se está oprimiendo un pulsador.";
Blockly.Msg.ESCORNABOT_BUTTON_SELECTED=[["Delante", "1"], ["Atrás", "3"], ["Izquierda", "2"],["Derecha", "4"],["Central", "5"]];;
