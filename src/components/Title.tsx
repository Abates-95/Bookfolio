interface TitleProps {
    titleText: string;
    className?: string;
  }


  export default function Title( props: TitleProps ) {
  return (
    <div className={`flex flex-row justify-center mx-auto ${props.className}`}>
      <div className="p-3  text-center text-4xl">
        <h3>
          {props.titleText}
        </h3>
      </div>
    </div>
  );
}