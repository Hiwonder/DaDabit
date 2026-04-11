/*
 dadabit package
*/
//% weight=10 icon="\uf013" color=#ff7f00
namespace dadabit {
    export enum Lights {
        //% block="Light 1"
        Light1 = 0x0,
        //% block="Light 2"
        Light2 = 0x1,
        //% block="All"
        All = 0x2
    }

    export enum iicPort {
        //% block="3"
        port3 = 0x03,
        //% block="4"
        port4 = 0x04,
        //% block="6"
        port6 = 0x06
    }

    export enum ioPort1 {
        //% block="1"
        port1 = 0x01
    }

    export enum ioPort2 {
        //% block="2"
        port2 = 0x02
    }

    export enum ioPort12 {
        //% block="1"
        port1 = 0x01,
        //% block="2"
        port2 = 0x02
    }

    export enum Temp_humi {
        //% block="Temperature"
        Temperature = 0x01,
        //% block="Humidity"
        Humidity = 0x02
    }

    export enum Oriention {
        //% block="Clockwise"
        Clockwise = 0x01,
        //% block="Counterclockwise"
        Counterclockwise = 0x02
    }

    export enum LineFollowerSensors {
        //% block="S1"
        S1,
        //% block="S2"
        S2,
        //% block="S3"
        S3,
        //% block="S4"
        S4
    }

    export enum LineColor {
        //% block="Black"
        Black,
        //% block="White"
        White
    }

    export enum TrackbitStateType {
        //% block="◌ ◌ ◌ ◌" 
        Tracking_State_0 = 0,
        //% block="◌ ● ● ◌" 
        Tracking_State_1 = 6,
        //% block="◌ ◌ ● ◌" 
        Tracking_State_2 = 4,
        //% block="◌ ● ◌ ◌" 
        Tracking_State_3 = 2,
    
    
        //% block="● ◌ ◌ ●" 
        Tracking_State_4 = 9,
        //% block="● ● ● ●" 
        Tracking_State_5 = 15,
        //% block="● ◌ ● ●" 
        Tracking_State_6 = 13,
        //% block="● ● ◌ ●" 
        Tracking_State_7 = 11,
    
        //% block="● ◌ ◌ ◌" 
        Tracking_State_8 = 1,
        //% block="● ● ● ◌" 
        Tracking_State_9 = 7,
        //% block="● ◌ ● ◌" 
        Tracking_State_10 = 5,
        //% block="● ● ◌ ◌" 
        Tracking_State_11 = 3,
    
        //% block="◌ ◌ ◌ ●" 
        Tracking_State_12 = 8,
        //% block="◌ ● ● ●" 
        Tracking_State_13 = 14,
        //% block="◌ ◌ ● ●" 
        Tracking_State_14 = 12,
        //% block="◌ ● ◌ ●" 
        Tracking_State_15 = 10
    }

    export enum TrackbitType {
        //% block="◌" 
        State_0 = 0,
        //% block="●" 
        State_1 = 1
    }

    export enum WORD_RESULT {
        //% block="Going straight"
        GO_STRAIGHT = 0x01,
        //% block="Going backward"
        GO_BACKWARD,
        //% block="Turning left"
        TURN_LEFT,
        //% block="Turning right"
        TURN_RIGHT,
        //% block="Lean forward"
        LEAN_FORWARD,
        //% block="Lean back"
        LEAN_BACK,
        //% block="Lean left"
        LEAN_LEFT,
        //% block="Lean right"
        LEAN_RIGHT,
        //% block="Stop"
        STOP,
        //% block="Attention"
        ATTENTION,
        //% block="Get down"
        GET_DOWN,
        //% block="Sit down"
        SIT_DOWN,
        //% block="Speed up"
        SPEED_UP,
        //% block="Slow down"
        SLOW_DOWN,
        //% block="Raise"
        EXECUTE_ACTION_ONE,
        //% block="Lower
        EXECUTE_ACTION_TWO,
        //% block="Barks once"
        EXECUTE_ACTION_THREE,
        //% block="Turn on the light"
        TURN_ON_THE_LIGHT,
        //% block="Turn off the light"
        TURN_OFF_THE_LIGHT,
        //% block="Open the door"
        OPEN_THE_DOOR,
        //% block="Close the door"
        CLOSE_THE_DOOR,
        //% block="Turn on the water pump"
        TURN_ON_THE_WATER_PUMP,
        //% block="Turn off the water pump"
        TURN_OFF_THE_WATER_PUMP,
        //% block="Unfold the airing rack"
        UNFOLD_THE_AIRING_RACK,
        //% block="Fold the aring rack"
        FOLD_THE_ARING_RACK,
        //% block="Hello"
        HELLO,
        //% block="Introduce yourself"
        INTRODUCE_YOURSELF,
        //% block="Show a skill"
        SHOW_A_SKIII,
        //% block="March"
        MARCH,
        //% block="Shake head"
        SHAKE_HEAD,
        //% block="Dive forward"
        DIVE_FORWARD,
        //% block="Dive backward"
        DIVE_BACKWARD,
        //% block="Combat mode"
        COMBAT_MODE,
        //% block="Squat down"
        SQUAT_DOWN,
        //% block="Shake it off"
        SHAKE_IT_OFF
    }

    export enum WORD_SPEAK_PLAY {
        //% block="Recyclable waste"
        RECYCLABLE_WASTE = 0x01,
        //% block="Kitchen waster"
        KITCHEN_WASTE,
        //% block="Hazardous Waste"
        HAZARDOUS_WASTE,
        //% block="Other waster"
        OTHER_WASTE,
        //% block="Abstacle ahead"
        ABSTACLE_AHEAD,
        //% block="Parking completed"
        PARKING,
        //% block="Restart departure"
        RESTART_DEPARTURE,
        //% block="Left turn detected"
        DETECT_LEFT_TURN,
        //% block="Right turn detected"
        DETECT_RIGHT_TURN,
        //% block="Parking detected"
        DETECT_PARKING,
        //% block="Red light detected"
        DETECT_RED_LIGHT,
        //% block="Green light detected"
        DETECT_GREEN_LIGHT,
        //% block="U-turn detected"
        DETECT_U_TURN,
        //% block="Turn detected"
        DETECT_TURN,
        //% block="Hello welcome"
        WELCOME_YOU
    }

    export enum WORD_CMD_PLAY {
        //% block="Going straight"
        GO_STRAIGHT = 0x01,
        //% block="Going backward"
        GO_BACKWARD,
        //% block="Turning left"
        TURN_LEFT,
        //% block="Turning right"
        TURN_RIGHT,
        //% block="Lean forward"
        LEAN_FORWARD,
        //% block="Lean back"
        LEAN_BACK,
        //% block="Lean left"
        LEAN_LEFT,
        //% block="Lean right"
        LEAN_RIGHT,
        //% block="Copy that"
        COPY_THAT,
        //% block="Turn on the light"
        TURN_ON_THE_LIGHT = 0x12,
        //% block="Turn off the light"
        TURN_OFF_THE_LIGHT,
        //% block="The door is open"
        OPEN_THE_DOOR,
        //% block="The door is closed "
        CLOSE_THE_DOOR,
        //% block="Turn on the water pump"
        TURN_ON_THE_WATER_PUMP,
        //% block="Turn off the water pump"
        TURN_OFF_THE_WATER_PUMP,
        //% block="Unfold the airing rack"
        UNFOLD_THE_AIRING_RACK,
        //% block="Fold the airing rack"
        FOLD_THE_ARING_RACK,
        //% block="Hi"
        HELLO,
        //% block="Hello, i'm Hiwonder, and i can talk and dance."
        INTRODUCE_YOURSELF
    }

    export enum VOICE_TYPE {
        //% block="Speak"
        SPEAK_TYPE = 0x00,
        //% block="Command"
        CMD_TYPE = 0xff
    }

    export enum WonderLLM_Mode {
       //% block="Voice"
       VOICE_MODE = 0x00,
       //% block="Color recognition"
       COLOR_MODE = 0x01,
       //% block="Facial recognition"
       FACIAL_MODE = 0x02
    }

    export enum WonderLLM_Data {
        //% block="Center X"
        CENTER_X = 0x00,
        //% block="Center Y"
        CENTER_Y = 0x01,
        //% block="Width"
        WIDTH = 0x02,
        //% block="Height"
        HEIGHT = 0x03
    }

    export enum WonderLLM_Color {
        //% block="Red"
        RED= 0x00,
        //% block="Yellow"
        YELLOW = 0x01,
        //% block="Green"
        GREEN = 0x02,
        //% block="Blue"
        BLUE = 0x03,
        //% block="Purple"
        PURPLE = 0x04
    }

    export enum WonderLLM_Color_ID {
        //% block="1"
        ONE = 0x01,
        //% block="2"
        TWO = 0x02,
        //% block="3"
        THREE = 0x03,
        //% block="4"
        FOUR = 0x04,
        //% block="5"
        FIVE = 0x05
    }

    export enum WonderLLM_Color_Threshold {
        //% block="minimum hue(H)"
        MIN_H = 0x00,
        //% block="maximum hue(H)"
        MAX_H = 0x01,
        //% block="minimum saturation(S)"
        MIN_S = 0x02,
        //% block="maximum saturation(S)"
        MAX_S = 0x03,
        //% block="minimum brightness(V)"
        MIN_V = 0x04,
        //% block="maximum brightness(V)"
        MAX_V = 0x05
    }

    let rgbLight: RGBLight.LHRGBLight;
    let boardRgbLight: RGBLight.LHRGBLight;

    let handleCmd: string = "";
    let batVoltage: number = 0;
    let distanceBak: number = 0;

    const INVALID_PORT = 0xff;
    let tempHumiPort = INVALID_PORT;
    let wifiPort = INVALID_PORT;
    let rgbPort = INVALID_PORT;
    let rainwaterPort = INVALID_PORT;
    let fanPin1 = INVALID_PORT;
    let fanPin2 = INVALID_PORT;
    let avoidSensorPort = INVALID_PORT;
    let lightPort = INVALID_PORT;
    let digitaltuePort = INVALID_PORT;
    let linefollowPort = INVALID_PORT;

    const AIMODULE_ADDR = 0x55;

    let temperature: number = 0;
    let airhumidity: number = 0;

    function mapRGB(x: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    /**
     * DaDabit initialization, please execute at boot time
    */
    //% weight=100 blockId=dadabit_init block="Initialize DaDabit"
    //% subcategory=Init
    export function dadabit_init() {
        // initColorSensor();
        initBoardRGBLight();
        serial.redirect(
            SerialPin.P12,
            SerialPin.P8,
            BaudRate.BaudRate115200);
        basic.forever(() => {
            getHandleCmd();
        });
        basic.forever(() => { getAIModuleCmd(); });
    }

    function initBoardRGBLight() {
        if (!boardRgbLight) {
            boardRgbLight = RGBLight.create(DigitalPin.P15, 2, RGBPixelMode.RGB);
        }
        clearBoardLight();
    }


    /**
     * Temperature and humidity sensor initialization, please execute at boot time
    */
    //% weight=99 blockId=temphumidity_init block="Initialize temperature and humidity sensor at port %port"
    //% subcategory=Init
    export function temphumidity_init(port: iicPort) {
        tempHumiPort = port;
    }

    //% weight=98 blockId=fan_init block="Initialize fan module %port"
    //% subcategory=Init
    export function fan_init(port: ioPort12) {
        switch (port) {
            case ioPort12.port1:
                fanPin1 = AnalogPin.P1;
                fanPin2 = AnalogPin.P2;
                break;
            case ioPort12.port2:
                fanPin1 = AnalogPin.P13;
                fanPin2 = AnalogPin.P14;
                break;
        }
    }

    /**
     * Wifi module initialization, please execute at boot time
    */
    //% weight=97 blockId=wifi_init block="Initialize wifi module at port %port"
    //% subcategory=Init
    export function wifi_init(port: iicPort) {
        wifiPort = port;
    }

    /**
     * Rainwater sensor initialization, please execute at boot time
    */
    //% weight=96 blockId=rainwater_init block="Initialize rainwater sensor at port %port"
    //% subcategory=Init
    export function rainwater_init(port: ioPort1) {
        rainwaterPort = port;
    }

    /**
     * Infrared obstacle avoidance sensor initialization, please execute at boot time
    */
    //% weight=95 blockId=avoidSensor_init block="Initialize infrared obstacle avoidance sensor at port %port"
    //% subcategory=Init
    export function avoidSensor_init(port: ioPort12) {
        avoidSensorPort = port;
    }

    /**
     * light sensor initialization, please execute at boot time
    */
    //% weight=93 blockId=lightSensor_init block="Initialize light sensor at port %port"
    //% subcategory=Init
    export function lightSensor_init(port: ioPort1) {
        lightPort = port;
    }

    /**
     *  Digital Tube initialization, please execute at boot time
    */
    //% weight=92 blockId=digitaltube_init block="Initialize digital tube at port %port"
    //% subcategory=Init
    export function digitaltube_init(port: iicPort) {
        digitaltuePort = port;
    }

    /**
     * RGB module initialization, please execute at boot time
    */
    //% weight=91 blockId=rgb_init block="Initialize RGB module at port %port"
    //% subcategory=Init
    export function rgb_init(port: ioPort2) {
        rgbPort = port;
        initRGBLight();
    }

    /**
     * RGB module initialization, please execute at boot time
    */
    //% weight=90 blockId=linefollower_init block="Initialize linefollower sensor at port %port"
    //% subcategory=Init
    export function linefollower_init(port: iicPort) {
        linefollowPort = port;
    }

    /**
     * Ultrasonic initialization, please execute at boot time
    */
    //% weight=88 blockId=ultrasonic_init block="Initialize ultrasonic sensor %port"
    //% subcategory=Init
    export function ultrasonic_init(port: iicPort) {

    }

    /**
     * Color recognition sensor initialization, please execute at boot time
    */
    //% weight=86 blockId=color_sensor_init block="Initialize color recognition sensor %port"
    //% subcategory=Init
    export function color_sensor_init(port: iicPort) {
        InitColor();
        control.waitMicros(100);
    }

    /**
     * WonderLLM initialization, please execute at boot time
    */
    //% weight=85 blockId=wonderllm_init block="Initialize WonderLLM at %port"
    //% subcategory=Init
    export function wonderllm_init(port: iicPort) {

    }

    /**
    * Get the handle command.
    */
    function getHandleCmd() {
        let charStr: string = serial.readString();
        handleCmd = handleCmd.concat(charStr);
        let cnt: number = countChar(handleCmd, "$");
        if (cnt == 0)
            return;
        let index = findIndexof(handleCmd, "$", 0);
        if (index != -1) {
            let cmd: string = handleCmd.substr(0, index);
            if (cmd.charAt(0).compare("A") == 0 && cmd.length == 5) {
                let arg1Int: number = strToNumber(cmd.substr(1, 2));//P14 AD
                let arg2Int: number = strToNumber(cmd.substr(3, 2));//音量值
                let arg3Int: number = strToNumber(cmd.substr(5, 2));//电压值=值 * 25.78(mV)
                batVoltage = Math.round(arg3Int * 25.78);
            }
        }
        handleCmd = "";
    }

    function countChar(src: string, strFind: string): number {
        let cnt: number = 0;
        for (let i = 0; i < src.length; i++) {
            if (src.charAt(i).compare(strFind) == 0) {
                cnt++;
            }
        }
        return cnt;
    }

    function findIndexof(src: string, strFind: string, startIndex: number): number {
        for (let i = startIndex; i < src.length; i++) {
            if (src.charAt(i).compare(strFind) == 0) {
                return i;
            }
        }
        return -1;
    }

    function strToNumber(str: string): number {
        let num: number = 0;
        for (let i = 0; i < str.length; i++) {
            let tmp: number = converOneChar(str.charAt(i));
            if (tmp == -1)
                return -1;
            if (i > 0)
                num *= 16;
            num += tmp;
        }
        return num;
    }

    function converOneChar(str: string): number {
        if (str.compare("0") >= 0 && str.compare("9") <= 0) {
            return parseInt(str);
        }
        else if (str.compare("A") >= 0 && str.compare("F") <= 0) {
            if (str.compare("A") == 0) {
                return 10;
            }
            else if (str.compare("B") == 0) {
                return 11;
            }
            else if (str.compare("C") == 0) {
                return 12;
            }
            else if (str.compare("D") == 0) {
                return 13;
            }
            else if (str.compare("E") == 0) {
                return 14;
            }
            else if (str.compare("F") == 0) {
                return 15;
            }
            return -1;
        }
        else
            return -1;
    }

    /**
    * Set the angle of lego 270° servo 1 to 6, range of -135~135 degree
    * @param index servo number in 1-6. eg: 1
    */
    //% weight=84 blockId=setLego270Servo block="Set Lego 270° servo|index %index|angle %angle|duration %duration"
    //% angle.min=-135 angle.max=135
    //% subcategory=Control
    export function setLego270Servo(index: number, angle: number, duration: number) {
        angle += 135;
        if (angle > 270) {
            return;
        }

        let position = mapRGB(angle, 0, 270, 500, 2500);

        let buf = pins.createBuffer(10);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x08;
        buf[3] = 0x03;//cmd type
        buf[4] = 0x01;
        buf[5] = duration & 0xff;
        buf[6] = (duration >> 8) & 0xff;
        buf[7] = index;
        buf[8] = position & 0xff;
        buf[9] = (position >> 8) & 0xff;
        serial.writeBuffer(buf);
    }

    /**
    * Set the speed of lego 360° servo 1 to 6, range of 0~100
    * @param index servo number in 1-6. eg: 1
    */
    //% weight=83 blockId=setLego360Servo block="Set Lego 360° servo|index %index|oriention %oriention|speed %speed"
    //% speed.min=0 speed.max=100
    //% subcategory=Control
    export function setLego360Servo(index: number, oriention: Oriention, speed: number) {
        if (oriention == Oriention.Clockwise) {
            speed *= -1;
        }
        let position = mapRGB(speed, -100, 100, 500, 2500);
        let duration = 20;
        let buf = pins.createBuffer(10);
        buf[0] = 0x55;
        buf[1] = 0x55;
        buf[2] = 0x08;
        buf[3] = 0x03;//cmd type
        buf[4] = 0x01;
        buf[5] = duration & 0xff;
        buf[6] = (duration >> 8) & 0xff;
        buf[7] = index;
        buf[8] = position & 0xff;
        buf[9] = (position >> 8) & 0xff;
        serial.writeBuffer(buf);
    }

    //% weight=82 blockId=setFanSpeed block="Set fan speed(-100~100) %speed"
    //% speed.min=-100 speed.max=100
    //% subcategory=Control
    export function setFanSpeed(speed: number) {
        if (fanPin1 === INVALID_PORT) return;

        if (speed > 100 || speed < -100) {
            return;
        }

        if (speed < 0) {
            pins.analogWritePin(fanPin2, 0);
            pins.analogWritePin(fanPin1, pins.map(-speed, 0, 100, 0, 1023));
        }
        else if (speed > 0) {
            pins.analogWritePin(fanPin1, 0);
            pins.analogWritePin(fanPin2, pins.map(speed, 0, 100, 0, 1023));
        }
        else {
            pins.analogWritePin(fanPin2, 0);
            pins.analogWritePin(fanPin1, 0);
        }
    }

    const DIGITALTUBE_ADDRESS = 0x4E;

    //% weight=81 blockId=digitalTubeShowNumber block="Digital tube show number %value"
    //% subcategory=Control
    export function digitalTubeShowNumber(value: number) {
        if (digitaltuePort === INVALID_PORT) return;
        const buf = pins.createBuffer(3);
        buf[0] = 0x01;
        buf[1] = (value >> 8) & 0xff;
        buf[2] = value & 0xff;
        pins.i2cWriteBuffer(DIGITALTUBE_ADDRESS, buf);
    }

    let ATH10_I2C_ADDR = 0x38;
    function temp_i2cwrite(value: number): number {
        let buf = pins.createBuffer(3);
        buf[0] = value >> 8;
        buf[1] = value & 0xff;
        buf[2] = 0;
        basic.pause(80);
        let rvalue = pins.i2cWriteBuffer(ATH10_I2C_ADDR, buf);
        // serial.writeString("writeback:");
        // serial.writeNumber(rvalue);
        // serial.writeLine("");
        return rvalue;
    }

    function temp_i2cread(bytes: number): Buffer {
        let val = pins.i2cReadBuffer(ATH10_I2C_ADDR, bytes);
        return val;
    }

    function GetInitStatus(): boolean {
        temp_i2cwrite(0xe108);
        let value = temp_i2cread(1);
        if ((value[0] & 0x68) == 0x08)
            return true;
        else
            return false;
    }

    function getAc() {
        temp_i2cwrite(0xac33);
        basic.pause(10)
        let value = temp_i2cread(1);
        for (let i = 0; i < 10; i++) {
            if ((value[0] & 0x80) != 0x80) {
                basic.pause(20);
                value = temp_i2cread(1);
            }
            else
                break;
        }
    }

    function readTempHumi(select: Temp_humi): number {
        let cnt: number = 0;
        while (!GetInitStatus() && cnt < 10) {
            basic.pause(20);
            cnt++;
        }
        getAc();
        let buf = temp_i2cread(6);
        if (buf.length != 6) {
            // serial.writeLine("444444")
            return 0;
        }
        let humiValue: number = 0;
        humiValue = (humiValue | buf[1]) << 8;
        humiValue = (humiValue | buf[2]) << 8;
        humiValue = humiValue | buf[3];
        humiValue = humiValue >> 4;
        let tempValue: number = 0;
        tempValue = (tempValue | buf[3]) << 8;
        tempValue = (tempValue | buf[4]) << 8;
        tempValue = tempValue | buf[5];
        tempValue = tempValue & 0xfffff;

        tempValue = tempValue * 200 * 10 / 1024 / 1024 - 500;
        tempValue = Math.round(tempValue / 10);
        if (tempValue != 0)
            temperature = tempValue;

        humiValue = humiValue * 1000 / 1024 / 1024;
        humiValue = Math.round(humiValue / 10);
        if (humiValue != 0)
            airhumidity = humiValue;

        if (select == Temp_humi.Temperature) {
            return temperature;
        }
        else {
            return airhumidity;
        }
    }

    /**
      * Get air temperature and humidity sensor value
      */
    //% weight=78 blockId="getTemperature" block="Get air %select value"
    //% subcategory=Sensor     
    export function getTemperature(select: Temp_humi): number {
        return readTempHumi(select);
    }

    /**
      * Get rainwater sensor value
      */
    //% weight=76 blockId="getRainWater" block="Get rainwater value (0~100)"
    //% subcategory=Sensor     
    export function getRainWater(): number {
        let ad = pins.analogReadPin(AnalogPin.P1);
        return Math.round(mapRGB(ad, 0, 1024, 0, 100));
    }

    /**
      * Get light sensor value
      */
    //% weight=75 blockId="getLightSensorValue" block="Get light sensor value (0~255)"
    //% subcategory=Sensor     
    export function getLightSensorValue(): number {
        let ad = pins.analogReadPin(AnalogPin.P1);
        return 100 - Math.round(mapRGB(ad, 0, 1024, 0, 100));
    }

    /**
      * Get infrared obstacle avoidance sensor status,1 detect obstacle,0 no detect obstacle
      */
    //% weight=74 blockId="getAvoidSensorValue" block="Infrared obstacle avoidance sensor has detected obstacle ?"
    //% subcategory=Sensor  blockGap=50
    export function getAvoidSensorValue(): boolean {
        let status = 0;
        let flag: boolean = false;
        let pin: DigitalPin;

        switch (avoidSensorPort) {
            case ioPort12.port1:
                pin = DigitalPin.P1;
                break;
            case ioPort12.port2:
                pin = DigitalPin.P13;
                break;
        }

        pins.setPull(pin, PinPullMode.PullUp);
        status = pins.digitalReadPin(pin);

        if (status == 1)
            flag = false;
        else
            flag = true;
        return flag;
    }

   const LINE_FOLLOWER_I2C_ADDR = 0x5C
    //% weight=73 blockId=getLinefollowSensorState block="Line follower detected %state"
    //% inlineInputMode=inline
    //% subcategory=Sensor
    export function getLinefollowSensorState(state: TrackbitStateType) : boolean{
        let result = i2cread(LINE_FOLLOWER_I2C_ADDR, 0x05)
        return result == state
    }

    //% weight=72 blockId=line_followers block="Line follower %lineFollowerSensor in %lineColor ?"
    //% inlineInputMode=inline
    //% subcategory=Sensor blockGap=50
    export function line_followers(lineFollowerSensor: LineFollowerSensors, lineColor: TrackbitType): boolean {
        let data = i2cread(LINE_FOLLOWER_I2C_ADDR, 0x05)
        let status = false;
        switch (lineFollowerSensor) {
            case LineFollowerSensors.S1:
                if (data & 0x01) {
                    if (lineColor == TrackbitType.State_0) {
                        status = true;
                    }
                }
                else {
                    if (lineColor == TrackbitType.State_1) {
                        status = true;
                    }
                }
                break;

            case LineFollowerSensors.S2:
                if (data & 0x02) {
                    if (lineColor == TrackbitType.State_0) {
                        status = true;
                    }
                }
                else {
                    if (lineColor == TrackbitType.State_1) {
                        status = true;
                    }
                }
                break;

            case LineFollowerSensors.S3:
                if (data & 0x04) {
                    if (lineColor == TrackbitType.State_0) {
                        status = true;
                    }
                }
                else {
                    if (lineColor == TrackbitType.State_1) {
                        status = true;
                    }
                }
                break;

            case LineFollowerSensors.S4:
                if (data & 0x08) {
                    if (lineColor == TrackbitType.State_0) {
                        status = true;
                    }
                }
                else {
                    if (lineColor == TrackbitType.State_1) {
                        status = true;
                    }
                }
                break;
        }
        return status;
    }

    /**
      * Get battery voltage value
      */
    //% weight=68 blockId="getBatteryVoltage" block="Get battery voltage (mV)"
    //% subcategory=Sensor     
    export function getBatteryVoltage(): number {
        return batVoltage;
    }

    function i2cread(adress: number, reg: number): number {
        pins.i2cWriteNumber(adress, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(adress, NumberFormat.UInt8BE);
        return val;
    }

    const Sonar_I2C_ADDR = 0x77;

    //% weight=67 blockId=GETDISTANCE block="Get Distance (cm)"
    //% subcategory=Sensor
    export function GETDISTANCE(): number {
        let distance = i2cread(Sonar_I2C_ADDR, 0) + i2cread(Sonar_I2C_ADDR, 1) * 256;
        if (distance > 65500)
            distance = 0
        return Math.round(distance / 10);
    }

    //% weight=66 blockId=setUltrasonicColor block="Set Ultrasonic sensor color %rgb"
    //% subcategory=Sensor blockGap=50
    export function setUltrasonicColor(rgb: RGBColors) {
        let tureRgb = 0;
        switch (rgb) {
            case RGBColors.Red:
                tureRgb = 0xFF0000;
                break;

            case RGBColors.Orange:
                tureRgb = 0xFFA500;
                break;

            case RGBColors.Yellow:
                tureRgb = 0xFFFF00;
                break;

            case RGBColors.Green:
                tureRgb = 0x00FF00;
                break;

            case RGBColors.Blue:
                tureRgb = 0x0000FF;
                break;

            case RGBColors.Indigo:
                tureRgb = 0x4b0082;
                break;

            case RGBColors.Violet:
                tureRgb = 0x8a2be2;
                break;

            case RGBColors.Purple:
                tureRgb = 0xFF00FF;
                break;

            case RGBColors.White:
                tureRgb = 0xFFFFFF;
                break;
        }
        let buf2 = pins.createBuffer(7);
        buf2[0] = 2;
        buf2[1] = 0;
        pins.i2cWriteBuffer(Sonar_I2C_ADDR, buf2)
        let buf = pins.createBuffer(7);
        buf[0] = 3;
        buf[1] = (tureRgb >> 16) & 0xff;
        buf[2] = (tureRgb >> 8) & 0xff;
        buf[3] = tureRgb & 0xff;
        buf[4] = (tureRgb >> 16) & 0xff;
        buf[5] = (tureRgb >> 8) & 0xff;
        buf[6] = tureRgb & 0xff;
        pins.i2cWriteBuffer(Sonar_I2C_ADDR, buf)
    }

    export enum Colors {
        //% block="Red"
        Red = 0x01,
        //% block="Green"
        Green = 0x02,
        //% block="Blue"
        Blue = 0x03,
        //% block="None"
        None = 0x06
    }

    export enum RGBValue {
        //% block="Red"
        Red = 0x01,
        //% block="Green"
        Green = 0x02,
        //% block="Blue"
        Blue = 0x03
    }


    let COLOR_SENSOR_ADDRESS = 0x53
    let COLOR_CONFIG_1 = 0x00
    let COLOR_CONFIG_2 = 0x04
    let COLOR_CONFIG_3 = 0x05
    let COLOR_CONFIG_4 = 0x0D

    function rgb_i2cwrite(reg: number, value: number) {
        let buf = pins.createBuffer(2);
        buf[0] = reg;
        buf[1] = value;
        pins.i2cWriteBuffer(COLOR_SENSOR_ADDRESS, buf);
    }

    function rgb_i2cReadBuffer(reg: number, bytes: number): Buffer {
        pins.i2cWriteNumber(COLOR_SENSOR_ADDRESS, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadBuffer(COLOR_SENSOR_ADDRESS, bytes);
        return val;
    }

    function InitColor(): boolean {
        rgb_i2cwrite(COLOR_CONFIG_1, 0x06);
        rgb_i2cwrite(COLOR_CONFIG_2, 0x42);
        rgb_i2cwrite(COLOR_CONFIG_3, 0x03);
        return true;
    }

    /**
    *  Color sensor return the color.
    */
    //% weight=62 blockId=checkCurrentColor block="Current color is %color"
    //% subcategory=Sensor
    export function checkCurrentColor(color: Colors): boolean {
        let t = Colors.None;
        let value = 0
        let read_dat = rgb_i2cReadBuffer(COLOR_CONFIG_4, 9);
        let r = ((read_dat[5] << 16) | (read_dat[4] << 8) | read_dat[3]) & 0xFFFF;
        let g = ((read_dat[2] << 16) | (read_dat[1] << 8) | read_dat[0]) & 0xFFFF;
        let b = ((read_dat[8] << 16) | (read_dat[7] << 8) | read_dat[6]) & 0xFFFF;

        // serial.writeString("r:")
        // serial.writeNumber(r)
        // serial.writeLine("")

        // serial.writeString("g:")
        // serial.writeNumber(g)
        // serial.writeLine("")

        // serial.writeString("b:")
        // serial.writeNumber(b)
        // serial.writeLine("")

        if (10000 > r && r > 4000 && (r - g) > 500 && (r - b) > 500) {
            t = Colors.Red
        }
        else if (10000 > g && g > 4000 && (g - r) > 500 && (g - b) > 500) {
            t = Colors.Green
        }
        else if (10000 > b && b > 4000 && (b - r) > 500 && (b - g) > 500) {
            t = Colors.Blue
        }
        return (color == t);
    }

    /**
    *  Color sensor return the color.
    */
    //% weight=60 blockId=get_color block="color %color value"
    //% subcategory=Sensor
    export function get_color(color: RGBValue): number {
        let value = 0
        let read_dat = rgb_i2cReadBuffer(COLOR_CONFIG_4, 9);

        let r = ((read_dat[5] << 16) | (read_dat[4] << 8) | read_dat[3]) & 0xFFFF;
        let g = ((read_dat[2] << 16) | (read_dat[1] << 8) | read_dat[0]) & 0xFFFF;
        let b = ((read_dat[8] << 16) | (read_dat[7] << 8) | read_dat[6]) & 0xFFFF;

        // serial.writeString("r:")
        // serial.writeNumber(r)
        // serial.writeLine("")

        // serial.writeString("g:")
        // serial.writeNumber(g)
        // serial.writeLine("")

        // serial.writeString("b:")
        // serial.writeNumber(b)
        // serial.writeLine("")

        switch (color) {
            case RGBValue.Red:
                value = r;
                break;

            case RGBValue.Green:
                value = g;
                break;

            case RGBValue.Blue:
                value = b;
                break;
        }
        return value;
    }

    let buffer: Buffer;
    function calculateChecksum(data: Buffer): number {
        let checksum = 0;
        for (let i = 0; i < data.length; i++) checksum ^= data.getUint8(i);
        return checksum & 0xFF;
    }

    const status = ["unknown", "starting", "configuring", "idle", "connecting", "listening", "speaking", "upgrading", "activating", "audio_testing", "fatal_error", "invalid_state"];

    let mcp_return = "";

    let fragments: { groupId: number, data: Buffer[], totalFragments: number, receivedFragments: number }[] = [];
    let fragmentTimeout = 2000;
    let lastFragmentTime = 0;

    function processFragment(fragmentId: number, totalFragments: number, actualData: Buffer): Buffer {
        const currentTime = input.runningTime();

        if (lastFragmentTime > 0 && currentTime - lastFragmentTime > fragmentTimeout) {
            fragments = [];
        }

        lastFragmentTime = currentTime;

        if (totalFragments === 1) return actualData;

        if (fragmentId === 1) {
            fragments.push({
                groupId: currentTime,
                data: [],
                totalFragments: totalFragments,
                receivedFragments: 0
            });
        }

        if (fragments.length === 0) return null;

        const fragmentInfo = fragments[fragments.length - 1];

        if (fragmentId < 1 || fragmentId > totalFragments || fragmentInfo.totalFragments !== totalFragments) return null;

        const fragmentIndex = fragmentId - 1;
        if (fragmentInfo.data[fragmentIndex] === undefined) {
            fragmentInfo.data[fragmentIndex] = actualData;
            fragmentInfo.receivedFragments++;
        }

        if (fragmentInfo.receivedFragments === totalFragments) {
            let totalLength = 0;
            for (let i = 0; i < fragmentInfo.data.length; i++) {
                if (fragmentInfo.data[i]) totalLength += fragmentInfo.data[i].length;
            }

            const reassembledData = pins.createBuffer(totalLength);
            let offset = 0;
            for (let i = 0; i < fragmentInfo.data.length; i++) {
                if (fragmentInfo.data[i]) {
                    for (let j = 0; j < fragmentInfo.data[i].length; j++) {
                        reassembledData.setUint8(offset++, fragmentInfo.data[i].getUint8(j));
                    }
                }
            }

            fragments.pop();
            return reassembledData;
        }

        return null;
    }
    function getAIModuleCmd() {
        const received = pins.i2cReadBuffer(AIMODULE_ADDR, 8);
        if (received.length < 8) return;

        const flag = received.getNumber(NumberFormat.UInt16BE, 0);
        const data_len = received.getNumber(NumberFormat.UInt16BE, 2);
        const fragment_id = received.getNumber(NumberFormat.UInt16LE, 4);
        const total_fragments = received.getNumber(NumberFormat.UInt16LE, 6);

        if (flag == 0xAA55 && data_len > 0 && data_len <= 8192) {
            const dataWithChecksum = pins.i2cReadBuffer(AIMODULE_ADDR, data_len + 1);
            if (dataWithChecksum.length < data_len + 1) return;

            const actualData = dataWithChecksum.slice(0, data_len);
            const receivedChecksum = dataWithChecksum.getUint8(data_len);

            if (receivedChecksum == calculateChecksum(actualData)) {
                const reassembledData = processFragment(fragment_id, total_fragments, actualData);

                if (reassembledData !== null) {
                    if (reassembledData.length == 1) {
                        const statusIdx = reassembledData.getUint8(0);
                        if (statusIdx < status.length) mcp_return = status[statusIdx];
                    } else {
                        try {
                            mcp_return = JSON.stringify(JSON.parse(reassembledData.toString()));
                        } catch (e) { }
                    }
                }
            }
        }
        basic.pause(100);
    }

    //% weight=93 blockId=get_mcp_setting_length block="Get the parameter length of the MCP setting(The length cannot exceed 1024)"
    //% subcategory=WonderLLM-Online
    export function get_mcp_setting_length(): number {
        return buffer.length;
    }

    //% weight=100 blockId=setMCP block="Set MCP tool |name = %tool_name|command = %command|params = %params|block = %block|return = %have_return"
    //% subcategory=WonderLLM-Online tool_name.shadow=text command.shadow=text params.shadow=text
    //% tool_name.defl=self.house.set_light_brightness command.defl="Call this tool when you want to set light brightness"
    //% params.defl='[[set_light_brightness, int, 0, 255]]' block.defl=false have_return.defl=false
    export function setMCP(tool_name: string, command: string, params: string, block: string, have_return: string) {
        const message = { tool_name, command, params: params ? JSON.parse(params) : [], block, return: have_return };
        buffer = Buffer.fromUTF8(JSON.stringify(message));
        pins.i2cWriteBuffer(AIMODULE_ADDR, buffer);
        basic.pause(50);
    }

    function sendAICommand(command: string, params: any) {
        buffer = Buffer.fromUTF8(JSON.stringify({ command, params }));
        pins.i2cWriteBuffer(AIMODULE_ADDR, buffer);
    }

    //% weight=95 blockId=sendStatus block="Send status %params to AIModule"
    //% subcategory=WonderLLM-Online blockGap=50
    export function sendStatus(params: string) {
        sendAICommand("status", params ? JSON.parse(params) : []);
    }

    //% weight=96 blockId=setVision block="Set Vision %params"
    //% subcategory=WonderLLM-Online
    export function setVision(params: string) {
        sendAICommand("vision", params);
    }

    //% weight=99 blockId=mcp_setting_finish block="MCP setting finish"
    //% subcategory=WonderLLM-Online
    export function mcp_setting_finish() {
        basic.pause(100);
        sendAICommand("mcp_setting", "true");
    }

    //% weight=94 blockId=get_mcp_return block="Get MCP return"
    //% subcategory=WonderLLM-Online
    export function get_mcp_return(): string {
        const temp = mcp_return;
        mcp_return = "";
        return temp;
    }

    //% weight=97 blockId=set_aimodule_sleep block="Set AIModule sleep"
    //% subcategory=WonderLLM-Online
    export function set_aimodule_sleep() {
        sendAICommand("sleep", "true");
    }

    //% weight=98 blockId=mcp_action_finish block="MCP action finish"
    //% subcategory=WonderLLM-Online
    export function mcp_action_finish() {
        sendAICommand("action_finish", "true");
    }


    const ASR_I2C_ADDR = 0x34
    const ASR_RESULT_ADDR = 0x64
    const ASR_SPEAK_ADDR = 0x6e
    const ASR_CMDMAND = 0x00
    const ASR_ANNOUNCER = 0xff

    const FaceDetect_Reg = 0x20

    const Reg_Mode_Write = 0x70
    const Reg_Mode_Read = 0x71

    const Reg_ColorThresh_0 = 0x80
    const Reg_ColorThresh_1 = 0x81
    const Reg_ColorThresh_2 = 0x82
    const Reg_ColorThresh_3 = 0x83
    const Reg_ColorThresh_4 = 0x84
    const ColorThresh_Len = 6

    const Color_num = 5
    const Color0_Detect_Reg = 0x10
    const Color1_Detect_Reg = 0x11
    const Color2_Detect_Reg = 0x12
    const Color3_Detect_Reg = 0x13
    const Color4_Detect_Reg = 0x14

    const Color_line_num = 4
    const Color0_segment1_Detect_Reg = 0xA0
    const Color0_segment2_Detect_Reg = 0xA1
    const Color1_segment1_Detect_Reg = 0xA2
    const Color1_segment2_Detect_Reg = 0xA3
    const Color2_segment1_Detect_Reg = 0xA4
    const Color2_segment2_Detect_Reg = 0xA5
    const Color3_segment1_Detect_Reg = 0xA6
    const Color3_segment2_Detect_Reg = 0xA7

    function asr_i2Cwrite(cmd: number, id: number): number {
        let buf = pins.createBuffer(3);
        buf[0] = ASR_SPEAK_ADDR
        buf[1] = cmd;
        buf[2] = id;
        let rvalue = pins.i2cWriteBuffer(ASR_I2C_ADDR, buf);
        return rvalue;
    }

    function asr_i2Cread(): number {
        pins.i2cWriteNumber(ASR_I2C_ADDR, ASR_RESULT_ADDR, NumberFormat.UInt8BE)
        let val = pins.i2cReadNumber(ASR_I2C_ADDR, NumberFormat.UInt8BE);
        return val;
    }

    /**
    * Set work mode
    */
    //% weight=100 blockId=setRecognitionMode block="Set %value work mode"
    //% subcategory=WonderLLM-Offline
    export function setRecognitionMode(value: WonderLLM_Mode) {
        const buf = pins.createBuffer(2);
        buf[0] = Reg_Mode_Write;
        buf[1] = value;
        pins.i2cWriteBuffer(ASR_I2C_ADDR, buf);
    }

    /**
    * Current work mode
    */
    //% weight=98 blockId=getRecognitionMode block="Current work mode is %value ?"
    //% subcategory=WonderLLM-Offline
    export function getRecognitionMode(value: WonderLLM_Mode): Boolean {
        pins.i2cWriteNumber(ASR_I2C_ADDR, Reg_Mode_Read, NumberFormat.UInt8BE)
        let val = pins.i2cReadNumber(ASR_I2C_ADDR, NumberFormat.UInt8BE);
        return val == value
    }
    
    /**
     * Read recognize result
    */
    //% weight=96 blockId=readASRResult block="Read recognize result is %value"
    //% subcategory=WonderLLM-Offline group=Voice
    export function readASRResult(value: WORD_RESULT): Boolean {
        let result = asr_i2Cread()
        return (result == value)
    }

    /**
    * Read recognize result world ID
    */
    //% weight=94 blockId=readASRResultID block="Read recognize result world ID"
    //% subcategory=WonderLLM-Offline group=Voice
    export function readASRResultID() {
        return asr_i2Cread()
    }

    /**
    * Play world
    */
    //% weight=92 blockId=playASRCmdWorld block="Play command world ID %value"
    //% subcategory=WonderLLM-Offline group=Voice
    export function playASRCmdWorld(value: WORD_CMD_PLAY) {
        asr_i2Cwrite(ASR_CMDMAND, value)
    }

    /**
    * Play world
    */
    //% weight=90 blockId=playASRSpeakWorld block="Play speak world ID %value"
    //% subcategory=WonderLLM-Offline group=Voice
    export function playASRSpeakWorld(value: WORD_SPEAK_PLAY) {
        asr_i2Cwrite(ASR_ANNOUNCER, value)
    }

    /**
    * Play world ID
    * @param value eg: 1
    */
    //% weight=88 blockId=playASRWorldID block="Play world |type %vtype| ID %value"
    //% subcategory=WonderLLM-Offline group=Voice
    export function playASRWorldID(vtype: VOICE_TYPE, value: number) {
        asr_i2Cwrite(vtype, value)
    }


    function decode_xywh_le(raw8: Buffer): Buffer
    {
        const buf = pins.createBuffer(4);
        let x = raw8[0] | (raw8[1] << 8)
        let y = raw8[2] | (raw8[3] << 8)
        let w = raw8[4] | (raw8[5] << 8)
        let h = raw8[6] | (raw8[7] << 8)
        buf[0] = x;
        buf[1] = y;
        buf[2] = w;
        buf[3] = h;
        return buf
    }


    /**
    * It has recognize humman face ?
    */
    //% weight=86 blockId=faceDetect block="It has detected humman face ?"
    //% subcategory=WonderLLM-Offline group=Facial-Recognition
    export function faceDetect(): Boolean {
        pins.i2cWriteNumber(ASR_I2C_ADDR, FaceDetect_Reg, NumberFormat.UInt8BE)
        let val = pins.i2cReadBuffer(ASR_I2C_ADDR, 8);
        if (val)
        {
            let face_info = decode_xywh_le(val)
            if (face_info[2] > 0)
                return true;
            else
                return false;
        }
        else
            return false;
    }

    /**
    * Get detected humman face box parameters
    */
    //% weight=85 blockId=faceDetectParams block="Get humman face box %value"
    //% subcategory=WonderLLM-Offline group=Facial-Recognition
    export function faceDetectParams(value: WonderLLM_Data): number {
        pins.i2cWriteNumber(ASR_I2C_ADDR, FaceDetect_Reg, NumberFormat.UInt8BE)
        let val = pins.i2cReadBuffer(ASR_I2C_ADDR, 8);
        if (!val)
            return 0
        let result = decode_xywh_le(val)
        return result[value]
    }
    
    // /**
    //  * Get detected color parameters
    // */
    // //% weight=84 blockId=getColorParamsList block="Get detected color ID %value parameter list"
    // //% subcategory=WonderLLM-Offline group=Color recognition
    // export function getColorParamsList(value: WonderLLM_Color_ID): Buffer {
    //     let reg = Color0_Detect_Reg + value
    //     pins.i2cWriteNumber(ASR_I2C_ADDR, reg, NumberFormat.UInt8BE)
    //     let val = pins.i2cReadBuffer(ASR_I2C_ADDR, 8);
    //     let color_info = decode_xywh_le(val)
    //     return color_info
    // }

    /**
     * The color ID of the largest recognized area
    */
    //% weight=82 blockId=getLargestColorID block="The color ID of the largest recognized area is %value"
    //% subcategory=WonderLLM-Offline group=Color-Recognition
    export function getLargestColorID(value: WonderLLM_Color_ID): Boolean {
        let max_color = 0
        let max_area = 0     

        for (let i = 0; i < Color_num; i++)
        {
            pins.i2cWriteNumber(ASR_I2C_ADDR, Color0_Detect_Reg + i, NumberFormat.UInt8BE)
            let val = pins.i2cReadBuffer(ASR_I2C_ADDR, 8);
            if (!val)
                return false;
            let color_info = decode_xywh_le(val)
            let areaTemp
            if (color_info[2] > 0)
                areaTemp = color_info[2] * color_info[3]
            else 
                areaTemp = 0
            if (areaTemp > max_area)
            {
                max_area = areaTemp
                max_color = i + 1
            }
        }
        serial.writeNumber(max_color)
        serial.writeLine("")
        return max_color == value
    }

    /**
    * Get color parameter
    */
    //% weight=80 blockId=getColorParameter block="Get the color ID %value1 parameter box %value2"
    //% subcategory=WonderLLM-Offline group=Color-Recognition
    export function getColorParameter(value1: WonderLLM_Color_ID, value2: WonderLLM_Data): number {
        pins.i2cWriteNumber(ASR_I2C_ADDR, Color0_Detect_Reg + value1 - 1, NumberFormat.UInt8BE)
        let val = pins.i2cReadBuffer(ASR_I2C_ADDR, 8);
        if (!val)
            return 0;
        let color_info = decode_xywh_le(val)
        return color_info[value2]
    }

    /**
    * Set color threshold parameter
    */
    //% weight=79 blockId=setColorThreshold block="Set the color ID %value1 threshold value, minimum hue(H) is %value2, maximum hue(H) is %value3, minimum saturation(S) is %value4, maximum saturation(S) is %value5, minimum brightness(V) is %value6, maximum brightness(V) is %value7."
    //% subcategory=WonderLLM-Offline group=Color-Recognition
    export function setColorThreshold(value1: WonderLLM_Color_ID, value2: number, value3: number, value4: number, value5: number, value6: number, value7: number) {
        let reg = Reg_ColorThresh_0 + value1 - 1
        const buf = pins.createBuffer(7);
        buf[0] = reg
        buf[1] = value2
        buf[2] = value3
        buf[3] = value4
        buf[4] = value5
        buf[5] = value6
        buf[6] = value7
        pins.i2cWriteBuffer(ASR_I2C_ADDR, buf);
    }

    /**
    * Get color threshold parameter
    */
    //% weight=78 blockId=getColorThreshold block="Get the color ID %value1 threshold value %value2"
    //% subcategory=WonderLLM-Offline group=Color-Recognition
    export function getColorThreshold(value1: WonderLLM_Color_ID, value2: WonderLLM_Color_Threshold): number {
        pins.i2cWriteNumber(ASR_I2C_ADDR, Reg_ColorThresh_0 + value1 - 1, NumberFormat.UInt8BE)
        let val = pins.i2cReadBuffer(ASR_I2C_ADDR, 6);
        if (!val)
            return 0;
        return val[value2]
    }


    /**
        * Set the brightness of the strip. This flag only applies to future operation.
        * @param brightness a measure of LED brightness in 0-255. eg: 255
   */
    //% blockId="boardRGBsetBrightness" block="Set board RGB light brightness %brightness"
    //% weight=66
    //% subcategory=LED
    export function boardRGBsetBrightness(brightness: number): void {
        boardRgbLight.setBrightness(brightness);
    }

    /**
     * Set the color of the colored lights, after finished the setting please perform  the display of colored lights.
     */
    //% weight=65 blockId=setBoardPixelRGB block="Set board RGB|%lightoffset|color to %rgb"
    //% subcategory=LED
    export function setBoardPixelRGB(lightoffset: Lights, rgb: RGBColors) {
        boardRgbLight.setPixelColor(lightoffset, rgb);
    }
    /**
     * Set RGB Color argument
     */
    //% weight=64 blockId=setBoardPixelRGBArgs block="Set board RGB|%lightoffset|color to %rgb"
    //% subcategory=LED
    export function setBoardPixelRGBArgs(lightoffset: Lights, rgb: number) {
        boardRgbLight.setPixelColor(lightoffset, rgb);
    }

    /**
     * Display the colored lights, and set the color of the colored lights to match the use. After setting the color of the colored lights, the color of the lights must be displayed.
     */
    //% weight=63 blockId=showBoardLight block="Show board RGB light"
    //% subcategory=LED
    export function showBoardLight() {
        boardRgbLight.show();
    }

    /**
     * Clear the color of the colored lights and turn off the lights.
     */
    //% weight=62 blockGap=50 blockId=clearBoardLight block="Clear board RGB light"
    //% subcategory=LED
    export function clearBoardLight() {
        boardRgbLight.clear();
    }

    /**
     * Initialize RGB
     */
    function initRGBLight() {
        if (!rgbLight) {
            rgbLight = RGBLight.create(DigitalPin.P13, 2, RGBPixelMode.RGB);
        }
        clearLight();
    }

    /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 255
    */
    //% blockId="setBrightness" block="set light brightness %brightness"
    //% weight=60
    //% subcategory=LED
    export function setBrightness(brightness: number): void {
        rgbLight.setBrightness(brightness);
    }

    /**
     * Set the color of the colored lights, after finished the setting please perform  the display of colored lights.
     */
    //% weight=58 blockId=setPixelRGB block="Set|%lightoffset|color to %rgb"
    //% subcategory=LED
    export function setPixelRGB(lightoffset: Lights, rgb: RGBColors) {
        rgbLight.setPixelColor(lightoffset, rgb);
    }
    /**
     * Set RGB Color argument
     */
    //% weight=56 blockId=setPixelRGBArgs block="Set|%lightoffset|color to %rgb"
    //% subcategory=LED
    export function setPixelRGBArgs(lightoffset: Lights, rgb: number) {
        rgbLight.setPixelColor(lightoffset, rgb);
    }

    /**
     * Display the colored lights, and set the color of the colored lights to match the use. After setting the color of the colored lights, the color of the lights must be displayed.
     */
    //% weight=54 blockId=showLight block="Show light"
    //% subcategory=LED
    export function showLight() {
        rgbLight.show();
    }

    /**
     * Clear the color of the colored lights and turn off the lights.
     */
    //% weight=52 blockGap=50 blockId=clearLight block="Clear light"
    //% subcategory=LED
    export function clearLight() {
        rgbLight.clear();
    }



    let WIFI_MODE_ADRESS = 0x69

    /**
     * set wifi module STA module
    */
    //% weight=48 blockId=setWifiSTAmodule block="Set wifi module to STA mode"
    //% subcategory=Communication
    // export function setWifiSTAmodule() {
    // }

    function updateTempHumi() {
        readTempHumi(Temp_humi.Temperature);
    }

    //% weight=46 blockId=setWiFiAPMode block="Set Wifi AP mode"
    //% subcategory=Communication
    export function setWiFiAPMode() {
        let cmdStr = "L0$";
        let data = pins.createBuffer(cmdStr.length);
        for (let i = 0; i <= cmdStr.length - 1; i++) {
            data[i] = cmdStr.charCodeAt(i)
        }
        pins.i2cWriteBuffer(WIFI_MODE_ADRESS, data)
    }
    /**
     * Send the sensors data
     */
    //% weight=44 blockId=sendSensorData block="Send sensors data to wifi module"
    //% subcategory=Communication
    export function sendSensorData() {
        updateTempHumi();
        let cmdStr: string = "A";
        cmdStr += (tempHumiPort != INVALID_PORT ? temperature : 'NO');
        cmdStr += '|';
        cmdStr += (tempHumiPort != INVALID_PORT ? airhumidity : 'NO');
        cmdStr += '|';
        cmdStr += (rainwaterPort != INVALID_PORT ? getRainWater() : 'NO');
        cmdStr += '$';
        let data = pins.createBuffer(cmdStr.length);
        for (let i = 0; i <= cmdStr.length - 1; i++) {
            data[i] = cmdStr.charCodeAt(i)
        }
        pins.i2cWriteBuffer(WIFI_MODE_ADRESS, data)
    }
    /**
    * get data from wifi
    */
    //% weight=42 blockId=getDatafromWifi block="Get data buffer from wifi module"
    //% subcategory=Communication
    //% blockGap=50 
    export function getDatafromWifi(): Buffer {
        return removeValueFromBuffer(pins.i2cReadBuffer(WIFI_MODE_ADRESS, 4), 0xd3);
    }

    /**
 * set wifi module connect to router, only valid in STA mode
 * @param ssid is a string, eg: "iot"
 * @param password is a string, eg: "12345678"
*/
    //% weight=40 blockId=setWifiConnectToRouter block="Set wifi module connect to router, wifi name %ssid and password %password"
    //% subcategory=Communication
    export function setWifiConnectToRouter(ssid: string, password: string) {
        let cmdStr: string = "I"
        cmdStr += ssid;
        cmdStr += '|||'
        cmdStr += password;
        cmdStr += "$$$";
        let data = pins.createBuffer(cmdStr.length);
        for (let i = 0; i <= cmdStr.length - 1; i++) {
            data[i] = cmdStr.charCodeAt(i)
        }
        pins.i2cWriteBuffer(WIFI_MODE_ADRESS, data)
    }

    //% weight=38 blockId=wifiIsConnected block="Is wifi connected ?"
    //% subcategory=Communication
    export function wifiIsConnected(): boolean {
        let cmdStr = "J0$";
        let data = pins.createBuffer(cmdStr.length);
        for (let i = 0; i <= cmdStr.length - 1; i++) {
            data[i] = cmdStr.charCodeAt(i)
        }
        pins.i2cWriteBuffer(WIFI_MODE_ADRESS, data)
        let val = pins.i2cReadBuffer(WIFI_MODE_ADRESS, 3);
        if (val[0] == 0x4A && val[1] == 1)
            return true;
        else
            return false;
    }

    /**
    * Connect to ThingSpeak and upload data. It would not upload anything if it failed to connect to Wifi or ThingSpeak.
    */
    //% weight=36 blockId=connectThingSpeak block="Upload data to ThingSpeak Write key = %write_api_key|Field 1 = %n1||Field 2 = %n2|Field 3 = %n3|Field 4 = %n4|Field 5 = %n5|Field 6 = %n6|Field 7 = %n7 Field 8 = %n8"
    //% ip.defl=api.thingspeak.com
    //% write_api_key.defl=your_write_api_key
    //% expandableArgumentMode="enabled" subcategory=Communication
    export function connectThingSpeak(write_api_key: string, n1?: number, n2?: number, n3?: number, n4?: number, n5?: number, n6?: number, n7?: number, n8?: number) {
        if (write_api_key != "") {
            let hasData = false;
            let cmdStr = "K" + write_api_key;
            if (n1 != undefined) {
                cmdStr += "|1|";
                cmdStr += n1.toString();
                hasData = true;
            }
            if (n2 != undefined) {
                cmdStr += "|2|";
                cmdStr += n2.toString();
                hasData = true;
            }
            if (n3 != undefined) {
                cmdStr += "|3|";
                cmdStr += n3.toString();
                hasData = true;
            }
            if (n4 != undefined) {
                cmdStr += "|4|";
                cmdStr += n4.toString();
                hasData = true;
            }
            if (n5 != undefined) {
                cmdStr += "|5|";
                cmdStr += n5.toString();
                hasData = true;
            }
            if (n6 != undefined) {
                cmdStr += "|6|";
                cmdStr += n6.toString();
                hasData = true;
            }
            if (n7 != undefined) {
                cmdStr += "|7|";
                cmdStr += n7.toString();
                hasData = true;
            }
            if (n8 != undefined) {
                cmdStr += "|8|";
                cmdStr += n8.toString();
                hasData = true;
            }
            cmdStr += '$'
            serial.writeLine(cmdStr);
            let data = pins.createBuffer(cmdStr.length);
            for (let i = 0; i <= cmdStr.length - 1; i++) {
                data[i] = cmdStr.charCodeAt(i)
            }
            if (hasData) {
                pins.i2cWriteBuffer(WIFI_MODE_ADRESS, data)
            }

        }
    }

    /**
    * get data from thingspeak
    * @param fieldId is a string, eg: "6"
    */
    //% weight=34 blockId=getDatafromThingspeak block="Get ThingSpeak field Id %fieldId data channel id %channelId and read key %readKey"
    //% subcategory=Communication
    export function getDatafromThingspeak(fieldId: string, channelId: string, readKey: string): string {
        let cmdStr = "M" + channelId + "|" + readKey + "|" + fieldId + "$";
        let data = pins.createBuffer(cmdStr.length);
        for (let i = 0; i <= cmdStr.length - 1; i++) {
            data[i] = cmdStr.charCodeAt(i)
        }
        pins.i2cWriteBuffer(WIFI_MODE_ADRESS, data)
        let received = pins.i2cReadBuffer(WIFI_MODE_ADRESS, 80)
        let receivedStr = received.toString();
        serial.writeString("data1:")
        serial.writeLine(receivedStr)
        let pos = receivedStr.indexOf("field" + fieldId);
        pos = receivedStr.indexOf(":", pos);
        let value = receivedStr.substr(pos + 2, 3)
        serial.writeString("data2:")
        serial.writeLine(value)
        return value;
    }

    function removeValueFromBuffer(buf: Buffer, value: number): Buffer {
        let count = 0;
        for (let i = 0; i < buf.length; i++) if (buf[i] !== value) count++;
        const result = pins.createBuffer(count);
        let index = 0;
        for (let i = 0; i < buf.length; i++) {
            if (buf[i] !== value) result.setNumber(NumberFormat.UInt8LE, index++, buf[i]);
        }
        return result;
    }

}
