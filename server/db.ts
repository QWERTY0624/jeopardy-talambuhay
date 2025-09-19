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
                'What game is the song \"Can You Really Call This A Hotel, I Didn\'t Receive A Mint On My Pillow Or Anything\" from?',
            answer: 'Undertale',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 200,
        question:
            'Which was the 27th state to join the United States?',
        answer: 'Florida',
    },
    {
        points: 300,
        question:
            'About what percent of people are allergic to seafood in the USA(include the percentage symbol)',
        answer: '2%',
    },
    {
        points: 400,
        question:
            'The Hamilton musical\'s songs average around how many words per minute',
        answer: '140',
    },
    {
        points: 100,
        question:
            'Deltarune(Undertales sequal) is set to have how many chapters',
        answer: '7',
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