import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const GraficoCircular = ({ percentage }) => {
const progressColor = "#00C6FF";
  const trailColor = "#3C4A56";
  
  return (
    <div className="relative h-40 w-40">
      
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          strokeLinecap: 'round',
          
          pathColor: progressColor,
          trailColor: trailColor,
        })}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <span className="text-3xl font-bold dark:text-white">{percentage}%</span>
        <span className="text-gray-400 text-sm font-semibold">Cobertura</span>
      </div>
    </div>
  );

}

export default GraficoCircular;