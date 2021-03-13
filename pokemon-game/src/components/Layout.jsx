import s from "./layoutStyle.module.css";

function Layout(props) {
  const { title, descr, urlBg, colorBg,children } = props;
  return (
    <>
      <section
        className={s.root}
        style={
          (urlBg)
            ? { background: "url(" + urlBg + ")" }
            : (colorBg)
            ? { background: colorBg }
            : ""
        }
      >
        <div className={s.wrapper}>
          <article>
            <div className={s.title}>
              <h3>{title}</h3>
              <span className={s.separator}></span>
            </div>
            <div className={`${s.desc} ${s.full}`}>
              <p>{descr}</p>{children}
            </div>
            
          </article>
        </div>
      </section>
    </>
  );
}

export default Layout;
