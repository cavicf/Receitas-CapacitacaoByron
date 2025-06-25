interface InfoPillProps{
    title: string;
    info: string | number;
}

export default function InfoPill({title, info}: InfoPillProps) {
    return(
        <div className="bg-orange-50 rounded-lg px-4 py-2 w-fit">
            <p className="text-sm text-gray-500">{title}</p>
            <p className="font-medium">{info}</p>
        </div>
    )
};
