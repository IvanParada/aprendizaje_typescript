

const skills = ['Bash', 'Counter','Healing',123]

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    hometown: 'Talcahuano'
}

console.table(strider)


export {};