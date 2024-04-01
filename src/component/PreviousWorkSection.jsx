import Button from './button.jsx';

export default function PreviousWorkSection() {
  return (
    <section className="container previous-work">
      <h1 className="text-xl">
        Some of Our <span className="unique-bg"> Previous Work</span>
      </h1>
      <ul className="previous-work_navigation">
        <li>
          <span className="active">ALL</span>
        </li>
        <li>
          <span>Web development</span>
        </li>
        <li>
          <span> Social media marketing</span>
        </li>
        <li>
          <span>Branding</span>
        </li>
      </ul>

      <div className="previous-work_tab">
        <div className="box-1 work fade-up"></div>
        <div className="box-2 work fade-up"></div>
        <div className="box-3 work fade-up"></div>
        <div className="box-4 work fade-up"></div>
        <div className="box-5 work fade-up"></div>
        <div className="box-6 work fade-up"></div>
      </div>

      <Button name="See More" />
    </section>
  );
}
