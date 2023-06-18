export interface IInputType {
    name: string;
    duration: number;
}

export interface IInput {
    [key: string]: IInputType;
}

export const inputs: { [key: string]: IInputType; } = {
    'a': {
        name: 'arse',
        duration: 940,
    },
    'b': {
        name: 'bastard',
        duration: 836,
    },
    'c': {
        name: 'cunt',
        duration: 731,
    },
    'd': {
        name: 'dick',
        duration: 731
    },
    'e': {
        name: 'elephant-cock',
        duration: 1149
    },
    'f': {
        name: 'fuck',
        duration: 1254
    },
    'g': {
        name: 'gash',
        duration: 888
    },
    'h': {
        name: 'hymen',
        duration: 1620
    },
    'i': {
        name: 'iguana-scrotum',
        duration: 1724
    },
    'j': {
        name: 'jizz',
        duration: 1045
    },
    'k': {
        name: 'kangeroo-spunk',
        duration: 1933
    },
    'l': {
        name: 'labia',
        duration: 1411
    },
    'm': {
        name: 'minge',
        duration: 1463
    },
    'n': {
        name: 'nads',
        duration: 1097
    },
    'o': {
        name: 'ovaries',
        duration: 1306
    },
    'p': {
        name: 'piss',
        duration: 836
    },
    'q': {
        name: 'quim',
        duration: 993
    },
    'r': {
        name: 'rectum',
        duration: 2769
    },
    's': {
        name: 'shite',
        duration: 940
    },
    't': {
        name: 'tit',
        duration: 1045
    },
    'u': {
        name: 'urine',
        duration: 1202
    },
    'v': {
        name: 'vaginal-discharge',
        duration: 2403
    },
    'w': {
        name: 'wank',
        duration: 1097
    },
    'x': {
        name: 'xylophone-buggery',
        duration: 1829
    },
    'y': {
        name: 'you-cunt',
        duration: 2247
    },
    'z': {
        name: 'zebra',
        duration: 4911
    },
    ' ': {
        name: 'fuck-off',
        duration: 784
    },
}
