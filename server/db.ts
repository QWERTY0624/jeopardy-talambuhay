import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 200,
        question: 'What website is this cat from',
        imgSrc: "/scratch.jpg",
        answer: 'scratch',
    },
    {
        points: 100,
        question:
            'What city is this(Use acronym)?',
        imgSrc: "/nycpic.jpg",
        answer: 'NYC',
    },
    {
        points: 400,
        question:
        'When was the electric guitar invented?',
        imgSrc: "/guitar.jpg",
        answer: '1931',
    },
    {
        points: 300,
        question: 'What was the tallest roller coaster in the world before it was taken down?',
        answer: 'Kingda ka',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 200,
            question:
                'What breed of dog is this?',
            imgSrc: '/dogimage.jpg',
            answer: 'Havanese',
        },
        {
            points: 100,
            question:
                'What sport is this?',
            imgSrc: '/climbing.jpg',
            answer: 'Bouldering',
        },
        {
            points: 300,
            question: 'Where was cheesecake first invented?',
            answer: 'Greece',
        },
        {
            points: 400,
            question:
                'What movie is this frame from',
            imgSrc:
                "",
            answer: 'Keith Haring',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'This country is home to the Dolomites, which are a mountain range that has historical \'via ferratas\', iron cables and rungs, to aid traversing the peaks?',
        imgSrc:
            "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
        answer: 'Italy',
    }
]);


const categories = [
    {
        title: 'Toby\'s Past',
        questions: pastQuestions
    },
    {
        title: 'Toby\'s Present',
        questions: presentQuestions
    },
    {
        title: 'Toby\'s Future',
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}