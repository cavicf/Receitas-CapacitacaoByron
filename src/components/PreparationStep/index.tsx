interface PreparationStepProps{
    index: number;
    description: string;
}

export default function PreparationStep({index, description}: PreparationStepProps) {
    return(
        <li className="flex gap-2">
            <span className="text-orange-500 flex flex-shrink-0 items-center justify-center bg-orange-100 w-6 h-6 rounded-full">{index}</span>
            <p>{description}</p>
        </li>
    );
};
