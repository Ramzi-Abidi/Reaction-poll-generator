export interface ArrowProps {
    iconType: string;
}

export interface icon {
    img: string;
    title: string;
    type: string;
}

export interface iconStates {
    likeState: string;
    loveState: string;
    supportState: string;
    curiousState: string;
    insightState: string;
}

export interface IAnimable {
    initial: {
        opacity: number;
        x: number;
    };

    animate: {
        opacity: number;
        x: number;
    };

    exit: {
        opacity: number;
        x: number;
    };
}
