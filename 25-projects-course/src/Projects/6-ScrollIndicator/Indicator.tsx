export default function Indicator({ scrollPercent }: { scrollPercent: number }): any {
  return (
    <div className="indicator">
      <div
        className="indicator-progress"
        style={{ width: `${scrollPercent}%` }}
      ></div>
    </div>
  );
}
