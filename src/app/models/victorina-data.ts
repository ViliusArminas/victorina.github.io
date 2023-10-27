export interface VictorinaData {
    id: number;
    title: string;
    image: string;
    questions?: VictorinaQuestion[]
}

export interface VictorinaQuestion {
    id: number,
    points: number,
    question: string,
    image?: string;
    answered: boolean,
    ceasars?: boolean,
    answer?: string
}

export interface VictorinaQuestionAnswer {
    answer:string;
    correct: boolean;
}