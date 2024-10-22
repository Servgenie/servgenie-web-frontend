import { cn } from "@/utils/help";

type Props = {
    src: string;
    className?: string;
}

const RotatingCard = ({ src, className }: Props) => {
    return <div className={cn("card-container", className)}>
        <div className="card">
            <div className="card-face card-front">
                <img src={src} alt="Front image" />
            </div>
            <div className="card-face card-back">
                <img src="/assets/hero/mobile/ans2.png" alt="Back image" />
            </div>
        </div>
    </div>
}

export default RotatingCard;