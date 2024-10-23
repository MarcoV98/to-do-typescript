export interface Itag {
    id: number, 
    name: string
}

export interface Iitems {
    id: number,
    name: string,
    totElements: number,
    tags: Itag[];
}

export const data: Iitems[] = [
    {
        "id": 100,
        "name": "Tema",
        "totElements": 9,
        "tags": [
            {
                "id": 100,
                "name": "ROBOTECH"
            },
            {
                "id": 101,
                "name": "ECOLOGY"
            },
            {
                "id": 103,
                "name": "MEGATREND"
            },
            {
                "id": 102,
                "name": "NEW GENERATION"
            },
            {
                "id": 108,
                "name": "NEW CITY"
            },
            {
                "id": 105,
                "name": "NEW MOBILITY"
            },
            {
                "id": 106,
                "name": "HEALTHCARE"
            },
            {
                "id": 107,
                "name": "ENERGY & INFRASTRUCTURE"
            },
            {
                "id": 104,
                "name": "DISRUPTION"
            }
        ]
    },
    {
        "id": 101,
        "name": "Area Geografica",
        "totElements": 11,
        "tags": [
            {
                "id": 110,
                "name": "Italia"
            },
            {
                "id": 109,
                "name": "Globale"
            },
            {
                "id": 111,
                "name": "Europa"
            },
            {
                "id": 123,
                "name": "India"
            },
            {
                "id": 122,
                "name": "Svizzera"
            },
            {
                "id": 112,
                "name": "Eurozona"
            },
            {
                "id": 113,
                "name": "Nord America"
            },
            {
                "id": 114,
                "name": "Giappone"
            },
            {
                "id": 115,
                "name": "Cina"
            },
            {
                "id": 116,
                "name": "Asia Pacifico"
            },
            {
                "id": 117,
                "name": "Mercati Emergenti Globali"
            }
        ]
    },
    {
        "id": 102,
        "name": "Tipologia SFDR",
        "totElements": 3,
        "tags": [
            {
                "id": 131,
                "name": "Art. 6"
            },
            {
                "id": 132,
                "name": "Art. 8"
            },
            {
                "id": 133,
                "name": "Art. 9"
            }
        ]
    },
    {
        "id": 103,
        "name": "Valuta",
        "totElements": 5,
        "tags": [
            {
                "id": 128,
                "name": "Altro"
            },
            {
                "id": 127,
                "name": "USD Hedged"
            },
            {
                "id": 125,
                "name": "EUR Hedged"
            },
            {
                "id": 124,
                "name": "EUR"
            },
            {
                "id": 126,
                "name": "USD"
            }
        ]
    },
    {
        "id": 104,
        "name": "Capitalizzazione",
        "totElements": 6,
        "tags": [
            {
                "id": 136,
                "name": "Large-Mid"
            },
            {
                "id": 139,
                "name": "Large-Small"
            },
            {
                "id": 138,
                "name": "Mid"
            },
            {
                "id": 134,
                "name": "Large"
            },
            {
                "id": 135,
                "name": "Multi-Cap"
            },
            {
                "id": 137,
                "name": "Small"
            }
        ]
    },
    {
        "id": 105,
        "name": "Stile",
        "totElements": 3,
        "tags": [
            {
                "id": 140,
                "name": "Value"
            },
            {
                "id": 141,
                "name": "Blend"
            },
            {
                "id": 142,
                "name": "Growth"
            }
        ]
    },
    {
        "id": 106,
        "name": "Tipologia Bond",
        "totElements": 5,
        "tags": [
            {
                "id": 147,
                "name": "Inflation Protected"
            },
            {
                "id": 146,
                "name": "Government"
            },
            {
                "id": 145,
                "name": "Convertible"
            },
            {
                "id": 143,
                "name": "Aggregate"
            },
            {
                "id": 144,
                "name": "Corporate"
            }
        ]
    },
    {
        "id": 107,
        "name": "Servizi ChallengePRO",
        "totElements": 3,
        "tags": [
            {
                "id": 130,
                "name": "Profit Lock In"
            },
            {
                "id": 129,
                "name": "Easy Switch"
            },
            {
                "id": 148,
                "name": "Profit Lock In + Easy Switch"
            }
        ]
    }
]