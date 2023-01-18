import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './css/map.css';

function Map({ selectedRoom, setSelectedRoom }) {
    // const [selectedRoom, setSelectedRoom] = useState("");

    const [roomHover, setRoomHover] = useState({
        "borg": false,
        "collins": false,
        "kay": false,
        "turing": false,
        "johnson": false
    });

    const handleMouseOver = (e) => {
        setRoomHover({
            ...{
                "borg": false,
                "collins": false,
                "kay": false,
                "turing": false,
                "johnson": false
            },
            [e.target.dataset.name]: true
        })
    }

    const handleMouseLeave = () => {
        setRoomHover({
            "borg": false,
            "collins": false,
            "kay": false,
            "turing": false,
            "johnson": false
        })
    }

    const handleSelectRoom = (e) => {
        const room = e.target.dataset.name;
        if (selectedRoom === room) {
            setSelectedRoom("");
            handleMouseLeave();
        } else {
            setSelectedRoom(room);
            handleMouseOver(e);
        }
    }

    return (
        <div className='map-cont'>
            <svg
                viewBox="0 0 1035 570" width="1035" height="500">

                {/* <!-- Campus Map Rectangle container Rounded Edges--> */}
                <rect
                    className="main-rect"
                    x="0" y="0" width="1035" height="500" fill="#ffffff">
                </rect>
                <g strokeLinecap="round" transform="translate(10 10) rotate(0 507.55416525102873 275.1555546917814)">
                    <path d="M32 0 M32 0 C241.32 -1.01, 449.75 -0.91, 983.11 0 M32 0 C395.39 -0.74, 759.13 -0.08, 983.11 0 M983.11 0 C1005.56 0.45, 1015.97 9.14, 1015.11 32 M983.11 0 C1003.53 -1.65, 1013.37 10.56, 1015.11 32 M1015.11 32 C1016.04 162.96, 1016.15 294.12, 1015.11 518.31 M1015.11 32 C1015.78 145.46, 1015.79 258.98, 1015.11 518.31 M1015.11 518.31 C1013.17 537.79, 1003.92 548.4, 983.11 550.31 M1015.11 518.31 C1012.81 537.51, 1005.99 550.85, 983.11 550.31 M983.11 550.31 C683.89 552.94, 383.24 553.1, 32 550.31 M983.11 550.31 C605.8 546.36, 227.73 546.99, 32 550.31 M32 550.31 C9.26 551.17, 1.65 540.38, 0 518.31 M32 550.31 C12.81 550.31, -0.89 539.51, 0 518.31 M0 518.31 C1.54 380.67, 1.95 243.58, 0 32 M0 518.31 C2.04 405.1, 1.59 292.57, 0 32 M0 32 C-0.61 12.26, 11.16 -1.43, 32 0 M0 32 C-1.56 8.54, 9.59 -1.51, 32 0" stroke="#000000" strokeWidth="1" fill="none">
                    </path>
                </g>

                <g strokeLinecap="round">
                    <g transform="translate(61.34671287625406 58.98806970564965) rotate(0 147.22148488664834 0.000018473865566193126)">
                        <path d="M0 0 C98.31 0, 196.62 0, 294.44 0 M0 0 C110.25 0, 220.5 0, 294.44 0" stroke="#000000" strokeWidth="1" fill="none">
                        </path>
                    </g>
                </g>
                <mask></mask>

                {/* <!-- Building Borders --> */}
                <g strokeLinecap="round">
                    <g transform="translate(356.87120243128265 56.72261384137755) rotate(0 -0.5876057793011569 162.75186543061227)">
                        <path d="M0 0 C-0.38 104.2, -0.75 208.39, -1.18 325.5 M0 0 C-0.42 115.89, -0.84 231.77, -1.18 325.5" stroke="#000000" strokeWidth="1" fill="none">
                        </path>
                    </g>
                </g>
                <mask></mask>

                <g strokeLinecap="round">
                    <g transform="translate(353.75882134534004 383.19496641400383) rotate(0 163.68709333946617 0)">
                        <path d="M0 0 C109.51 0, 219.01 0, 327.37 0 M0 0 C105.6 0, 211.19 0, 327.37 0" stroke="#000000" strokeWidth="1" fill="none">
                        </path>
                    </g>
                </g>
                <mask></mask>

                <g strokeLinecap="round">
                    <g transform="translate(682.1015558402123 383.19496641400383) rotate(0 -0.9685478159394734 -136.56736654198744)">
                        <path d="M0 0 C-0.44 -62.53, -0.89 -125.06, -1.94 -273.13 M0 0 C-0.67 -93.77, -1.33 -187.53, -1.94 -273.13" stroke="#000000" strokeWidth="1" fill="none">
                        </path>
                    </g>
                </g>
                <mask></mask>

                <g strokeLinecap="round">
                    <g transform="translate(678.2272906809922 111.99736590963857) rotate(0 128.33454384171318 0.4842831449025198)">
                        <path d="M0 0 C89.15 0.34, 178.3 0.67, 256.67 0.97 M0 0 C57.43 0.22, 114.86 0.43, 256.67 0.97" stroke="#000000" strokeWidth="1" fill="none">
                        </path>
                    </g>
                </g>
                <mask></mask>

                <g strokeLinecap="round">
                    <g transform="translate(934.8963783644194 113.93448001538309) rotate(0 0.9685478159394734 194.68111300696273)">
                        <path d="M0 0 C0.74 148.86, 1.48 297.71, 1.94 389.36 M0 0 C0.5 101.32, 1.01 202.64, 1.94 389.36" stroke="#000000" strokeWidth="1" fill="none">
                        </path>
                    </g>
                </g>
                <mask></mask>

                <g strokeLinecap="round">
                    <g transform="translate(937.8020957076988 506.2023494771265) rotate(0 -93.95054215989967 -1.4528586716398877)">
                        <path d="M0 0 C-67.61 -1.05, -135.22 -2.09, -187.9 -2.91 M0 0 C-42.91 -0.66, -85.83 -1.33, -187.9 -2.91" stroke="#000000" strokeWidth="1" fill="none">
                        </path>
                    </g>
                </g>
                <mask></mask>

                <g strokeLinecap="round">
                    <g transform="translate(750.869485308378 503.2966321338463) rotate(0 0 -12.107032437897487)">
                        <path d="M0 0 C0 -7.51, 0 -15.01, 0 -24.21 M0 0 C0 -5.44, 0 -10.87, 0 -24.21" stroke="#000000" strokeWidth="1" fill="none">
                        </path>
                    </g>
                </g>
                <mask></mask>

                <g strokeLinecap="round">
                    <g transform="translate(754.7438243630586 480.0511889694526) rotate(0 -196.7493648177924 -0.20545635361258974)">
                        <path d="M0 0 C-95.64 -0.1, -191.29 -0.2, -393.5 -0.41 M0 0 C-116.18 -0.12, -232.35 -0.24, -393.5 -0.41" stroke="#000000" strokeWidth="1" fill="none">
                        </path>
                    </g>
                </g>
                <mask></mask>

                <g strokeLinecap="round">
                    <g transform="translate(361.3346600431969 480.00160013276854) rotate(0 0.5706197182603319 19.39604631897805)">
                        <path d="M0 0 C0.24 8.13, 0.48 16.25, 1.14 38.79 M0 0 C0.31 10.42, 0.61 20.85, 1.14 38.79" stroke="#000000" strokeWidth="1" fill="none">
                        </path>
                    </g>
                </g>
                <mask></mask>

                <g strokeLinecap="round">
                    <g transform="translate(362.47589947971755 518.7936927707251) rotate(0 -146.25295554457443 -0.4843108557006417)">
                        <path d="M0 0 C-80.07 -0.27, -160.15 -0.53, -292.51 -0.97 M0 0 C-93.53 -0.31, -187.07 -0.62, -292.51 -0.97" stroke="#000000" strokeWidth="1" fill="none">
                        </path>
                    </g>
                </g>
                <mask></mask>

                <g strokeLinecap="round">
                    <g transform="translate(61.7632137083674 55.83153030995118) rotate(0 1.681980853521054 231.9653551383567)">
                        <path d="M0 0 C1.26 173.72, 2.52 347.43, 3.36 463.93 M0 0 C0.88 121.72, 1.77 243.45, 3.36 463.93" stroke="#000000" strokeWidth="1" fill="none">
                        </path>
                    </g>
                </g><mask></mask>

                {/* <!-- Turing Right Edge --> */}
                <g onMouseLeave={selectedRoom ? null : () => handleMouseLeave()}>
                    <polygon
                        data-name="turing"
                        points="64.3344,375 303.3344,449 303.3344,519.78 64.3344,519.78"
                        fill={roomHover["turing"] ? "#fcd2f6" : "#FFF"}
                        onMouseOver={selectedRoom ? null : handleMouseOver}
                        onClick={handleSelectRoom}
                    />
                    <g strokeLinecap="round">
                        <g transform="translate(303.39359596187023 518.7936927707251) rotate(0 0.8453779351061712 -35.10033127945712)">
                            <path d="M1.32 0.29 C2.07 -25.91, 0.16 -53.66, 1.18 -68.09 M0.71 0.16 C0.12 -23.87, -0.06 -45.72, 0.65 -70.49"
                                data-name="turing"
                                stroke={roomHover["turing"] ? "#b3108a" : "#000000"}
                                strokeWidth={roomHover["turing"] ? "5" : "1"}
                                fill="none">
                            </path>
                        </g>
                    </g>

                    {/* <!-- Turing Top Slant Edge --> */}
                    <g strokeLinecap="round">
                        <g transform="translate(305.50372555094145 448.3985801782983) rotate(0 -120.99018476006768 -35.50621804340153)">
                            <path d="M1.51 0.03 C-87.18 -23.01, -175.99 -49.38, -243.49 -71.04 M-0.76 -0.52 C-89.82 -26.6, -180.41 -52.61, -242.4 -70.72"
                                data-name="turing"
                                stroke={roomHover["turing"] ? "#b3108a" : "#000000"}
                                strokeWidth={roomHover["turing"] ? "5" : "1"}
                                fill="none">
                            </path>
                        </g>
                    </g>

                    {/* <!-- Turing Bottom --> */}
                    <g strokeLinecap="round">
                        <g transform="translate(64.33440163681189 518.5660397670531) rotate(0 119.46135892861776 -0.5083158356969761)">
                            <path d="M0.21 -1.66 C53.98 1.44, 108.76 -1.21, 239.07 0.64 M-0.53 -0.61 C80.56 -0.47, 161.91 -1.61, 239.45 -0.61"
                                data-name="turing"
                                stroke={roomHover["turing"] ? "#b3108a" : "#000000"}
                                strokeWidth={roomHover["turing"] ? "5" : "1"}
                                fill="none"></path>
                        </g>
                    </g>

                    {/* <!-- Turing Left --> */}
                    <g strokeLinecap="round">
                        <g transform="translate(64.76188417300637 379.16992983511363) rotate(0 0.8484551825340532 70.21744851434346)">
                            <path d="M-0.04 1.99 C1.03 54.56, -0.9 110.91, -0.09 141.29 M-0.18 -0.85 C0.25 36.34, 0.06 74.4, 1.99 140.32"
                                data-name="turing"
                                stroke={roomHover["turing"] ? "#b3108a" : "#000000"}
                                strokeWidth={roomHover["turing"] ? "5" : "1"}
                                fill="none">
                            </path>
                        </g>
                    </g>

                    <g
                        transform="translate(139.46158244995968 453.04475230952085) rotate(0 30.5 12.5)">
                        <text x="30.5" y="18" fontFamily="Virgil, Segoe UI Emoji" fontSize="30px" fill="#000000" textAnchor="middle"
                            data-name="turing"
                            onMouseOver={selectedRoom ? null : handleMouseOver}
                            onClick={handleSelectRoom}
                            // style="white-space: pre;" 
                            direction="ltr">
                            Turing
                        </text>
                    </g>
                </g>

                {/* <!-- Collins (One) --> */}
                <g onMouseLeave={selectedRoom ? null : () => handleMouseLeave()} >
                    <rect
                        data-name="collins"
                        x="63.635" y="195.452"
                        width="119.23" height="88.07"
                        fill={roomHover["collins"] ? "#d1fa57" : "#FFF"}
                        onMouseOver={selectedRoom ? null : handleMouseOver}
                        onClick={handleSelectRoom}
                    >

                    </rect>
                    <g strokeLinecap="round">
                        <g transform="translate(180.38610205555597 282.4643678561424) rotate(0 0 -42.132458104790885)">
                            <path d="M0 0 C0 -18.86, 0 -37.71, 0 -84.26 M0 0 C0 -32.96, 0 -65.92, 0 -84.26"
                                data-name="collins"
                                stroke={roomHover["collins"] ? "#16842a" : "#000000"}
                                strokeWidth={roomHover["collins"] ? "5" : "1"}
                                fill="none">
                            </path>
                        </g>
                    </g>

                    <g strokeLinecap="round" transform="translate(63.635142123962396 195.45152462718443) rotate(0 58.07958921401132 42.5656534633456)">
                        <path d="M-1.26 0.83 C40.44 2.42, 85.15 1.69, 116.19 -1.58 M-0.46 -0.03 C35.63 -0.84, 72.29 -0.51, 115.21 -0.38 M114.96 -0.22 C114.29 24.89, 115.78 48.51, 117.28 84.12 M116.65 -0.45 C115.35 21.59, 116.96 41.16, 116.97 84.77 M114.77 85.89 C73.92 84.75, 27.24 87.25, -1.54 86.24 M116.52 84.72 C85.23 85.18, 56.13 83.43, 0.76 84.34 M-1.95 83.48 C-0.43 57, 1.98 33.43, 1.64 -0.58 M-0.47 85.29 C0.35 65.34, 0.33 45.4, 0.48 -0.95"
                            data-name="collins"
                            stroke={roomHover["collins"] ? "#076e08" : "#000000"}
                            strokeWidth={roomHover["collins"] ? "5" : "1"}
                            fill="none">
                        </path>
                    </g>
                    <g transform="translate(80.64962477145127 229.87905107971164) rotate(0 30 12.5)">
                        <text x="30" y="18" fontFamily="Virgil, Segoe UI Emoji" fontSize="30px" fill="#000000" textAnchor="middle"
                            data-name="collins"
                            onMouseOver={selectedRoom ? null : handleMouseOver}
                            onClick={handleSelectRoom}
                            direction="ltr">
                            Collins
                        </text>
                    </g>
                </g>

                {/* <!-- Kay --> */}
                <g onMouseLeave={selectedRoom ? null : () => handleMouseLeave()} >
                    <rect
                        data-name="kay"
                        x="182.1058" y="196.6278"
                        width="119.76" height="88.04"
                        fill={roomHover["kay"] ? "#faf457" : "#FFF"}
                        onMouseOver={selectedRoom ? null : handleMouseOver}
                        onClick={handleSelectRoom}
                    >
                    </rect>
                    <g strokeLinecap="round" transform="translate(182.1058403586294 196.62780935426508) rotate(0 58.07958921401132 42.5656534633456)">
                        <path d="M-1.7 -1.25 C41.73 -1.82, 86.22 -1.53, 117.42 1.85 M0.31 0.68 C43.9 0.98, 89.38 0.54, 116.75 -0.71 M117.35 1.8 C113.72 29.89, 117.2 59.73, 114.2 84.26 M116.34 0.38 C115.34 33.22, 114.6 68.4, 116.84 85.67 M118.06 84.67 C75.11 85, 38.75 84.54, 1.32 86.56 M116.8 85.89 C91.82 84.24, 66.14 84.49, -0.97 84.78 M0.98 85.98 C-1.62 56.39, 0.21 28.57, -0.63 -0.29 M0.24 85.36 C0.15 57.13, 0.78 28.92, 0.39 0.7"
                            data-name="kay"
                            stroke={roomHover["kay"] ? "#FCBA03" : "#000000"}
                            strokeWidth={roomHover["kay"] ? "5" : "1"}
                            fill="none">
                        </path>
                    </g>

                    <g transform="translate(212.75132743902395 225.03623810455247) rotate(0 18 12.5)">
                        <text x="18" y="18" fontFamily="Virgil, Segoe UI Emoji" fontSize="30px" fill="#000000" textAnchor="middle"
                            data-name="kay"
                            onMouseOver={selectedRoom ? null : handleMouseOver}
                            onClick={handleSelectRoom}
                            direction="ltr">
                            Kay
                        </text>
                    </g>
                </g>

                {/* <!-- Johnson --> */}
                <g onMouseLeave={selectedRoom ? null : () => handleMouseLeave()}>
                    <rect
                        data-name="johnson"
                        x="750.6491" y="298.0091"
                        width="187.65" height="208.26"
                        fill={roomHover["johnson"] ? "#CD5F04" : "#FFF"}
                        onMouseOver={selectedRoom ? null : handleMouseOver}
                        onClick={handleSelectRoom}
                    >
                    </rect>
                    <g strokeLinecap="round" transform="translate(750.6491204679287 298.0091146767272) rotate(0 92.39709453692512 102.64818237509371)">
                        <path d="M-1.62 -0.63 C42.06 0.25, 83.08 -2.37, 185.27 0.45 M0.23 0.39 C46.21 0.7, 91.54 0.53, 183.98 0.89 M185.3 0.17 C186.46 64.85, 185.95 129.38, 184.77 205.64 M184.01 -0.62 C186.14 45.37, 185.07 89.46, 185.36 204.7 M186.03 206.58 C126.64 208.72, 72.36 205.59, 1.97 207.28 M183.98 206.03 C144.5 205.55, 105.43 205.79, 0.9 204.98 M-0.3 206.61 C0.37 148.93, 2.42 91.18, 1.76 1.39 M-0.15 205 C1.14 132.47, 1.13 58.81, 0.45 0.21"
                            data-name="johnson"
                            stroke={roomHover["johnson"] ? "#FF0000" : "#000000"}
                            strokeWidth={roomHover["johnson"] ? "5" : "1"}
                            fill="none"
                        >
                        </path>
                    </g>

                    <g transform="translate(809.8131388431175 389.92449379988193) rotate(0 37.5 12.5)">
                        <text x="37.5" y="18" fontFamily="Virgil, Segoe UI Emoji" fontSize="30px" fill="#000000" textAnchor="middle"
                            data-name="johnson"
                            onMouseOver={selectedRoom ? null : handleMouseOver}
                            onClick={handleSelectRoom}
                            direction="ltr">
                            Johnson
                        </text>
                    </g>
                </g>

                {/* <!-- Borg --> */}
                <g onMouseLeave={selectedRoom ? null : () => handleMouseLeave()}>
                    <rect
                        data-name="borg"
                        x="60.337" y="57.216"
                        width="298.24" height="139.95"
                        fill={roomHover["borg"] ? "#a8e4ff" : "#FFF"}
                        onMouseOver={selectedRoom ? null : handleMouseOver}
                        onClick={handleSelectRoom}
                    >
                    </rect>
                    <g strokeLinecap="round" transform="translate(60.337015271858945 57.21612886637104) rotate(0 148.25150975458246 68.33209255726615)">
                        <path d="M1.18 -1.31 C111 0.54, 223.32 0.36, 296.1 -1.27 M0.57 0.42 C75.48 1.63, 149.43 0.99, 295.93 0.44 M296.15 -1.86 C296.09 34.34, 297.71 65.95, 295.29 134.67 M296.47 0.16 C296.56 34.12, 294.85 70.06, 296.35 136.92 M296.6 137.24 C205.29 138.9, 110.47 137.2, -0.27 136.51 M297.12 136.89 C231.6 137.46, 166.6 137.78, -0.16 136.22 M-1.12 138.09 C-1 99.46, 1.85 62.19, 0.05 -1.62 M0.03 136.94 C1.43 97.61, 1.14 59.2, -0.26 -0.41"
                            data-name="borg"
                            stroke={roomHover["borg"] ? "#103BB3" : "#000000"}
                            strokeWidth={roomHover["borg"] ? "5" : "1"}
                            fill="none">
                        </path>
                    </g>

                    <g transform="translate(164.0623970179613 115.17889719035202) rotate(0 22.5 12.5)">
                        <text x="0" y="18" fontFamily="Virgil, Segoe UI Emoji" fontSize="30px" fill="#000000" textAnchor="start"
                            data-name="borg"
                            onMouseOver={selectedRoom ? null : handleMouseOver}
                            onClick={handleSelectRoom}
                            direction="ltr">
                            Borg
                        </text>
                    </g>
                </g>

                {/* <!-- Woo --> */}
                <g strokeLinecap="round" transform="translate(749.9010113878994 229.1934251293933) rotate(0 92.49768348826001 138.5044621738664)">
                    <path d="M0 0 C48.14 0, 96.28 0, 185 0 M0 0 C43.23 0, 86.47 0, 185 0 M185 0 C185 55.47, 185 110.94, 185 277.01 M185 0 C185 109.95, 185 219.9, 185 277.01 M185 277.01 C112.29 277.01, 39.58 277.01, 0 277.01 M185 277.01 C141.99 277.01, 98.99 277.01, 0 277.01 M0 277.01 C0 212.74, 0 148.47, 0 0 M0 277.01 C0 216.01, 0 155.02, 0 0" stroke="#000000" strokeWidth="1" fill="none">
                    </path>
                </g>

                <g strokeLinecap="round">
                    <g transform="translate(751.8381070197775 296.99280678161995) rotate(0 92.01344652802072 0.4842923818353029)">
                        <path d="M0 0 C42.03 0.22, 84.06 0.44, 184.03 0.97 M0 0 C63.7 0.34, 127.4 0.67, 184.03 0.97" stroke="#000000" strokeWidth="1" fill="none">
                        </path>
                    </g>
                </g><mask></mask>

                <g strokeLinecap="round">
                    <g transform="translate(749.9010113878994 232.09914247267443) rotate(0 -31.962595194234382 0)">
                        <path d="M0 0 C-14.35 0, -28.7 0, -63.93 0 M0 0 C-16.63 0, -33.25 0, -63.93 0" stroke="#000000" strokeWidth="1" fill="none">
                        </path>
                    </g>
                </g><mask></mask>

                <g transform="translate(703.3575061695046 156.03899681233588) rotate(0 109.5 12.5)">
                    <text x="109.5" y="18" fontFamily="Virgil, Segoe UI Emoji" fontSize="20px" fill="#000000" textAnchor="middle"
                        direction="ltr">
                        Thar be Dragons here
                    </text>
                </g>

                <g transform="translate(806.4538805669026 252.86483682455764) rotate(0 38.5 12.5)">
                    <text x="38.5" y="18" fontFamily="Virgil, Segoe UI Emoji" fontSize="20px" fill="#000000" textAnchor="middle"
                        direction="ltr">
                        Woooo...
                    </text>
                </g>

                {/* <!-- Kay & Collins --> */}
                <g strokeLinecap="round" transform="translate(63.19004283580034 195.29373430328087) rotate(0 118.16464398342532 43.10104286846126)">
                    <path d="M0 0 C81.13 0, 162.26 0, 236.33 0 M0 0 C88.73 0, 177.46 0, 236.33 0 M236.33 0 C236.33 23.62, 236.33 47.24, 236.33 86.2 M236.33 0 C236.33 25.75, 236.33 51.5, 236.33 86.2 M236.33 86.2 C145.99 86.2, 55.64 86.2, 0 86.2 M236.33 86.2 C148.22 86.2, 60.11 86.2, 0 86.2 M0 86.2 C0 58.23, 0 30.26, 0 0 M0 86.2 C0 67.83, 0 49.46, 0 0" stroke="#000000"
                        strokeWidth="1"
                        fill="none">
                    </path>
                </g>

                <g transform="translate(118.3217656450588 331.7701078420423) rotate(0 98 12.5)">
                    <text x="0" y="18" fontFamily="Virgil, Segoe UI Emoji" fontSize="20px" fill="#000000" textAnchor="start"
                        direction="ltr">
                        babies and toddlers</text>
                </g>
            </svg>
        </div>
    )
}
export default Map