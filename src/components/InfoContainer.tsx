interface InfoProps {
    infoText: string;
    className?: string;
  }

  export default function Info( props: InfoProps ) {
  return (
    <div className={`text-center w-6/12 ${props.className}`}>
      <div className="text-4xl">
        <h3>
          {props.infoText}
        </h3>
      </div>
    </div>
  );
}