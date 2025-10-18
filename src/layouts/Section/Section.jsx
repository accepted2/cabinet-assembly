import './Section.scss'
import classNames from 'classnames'

const Section = (props) => {
  const {
    className,
    title,
    titleId,
    description,
    actions,
    children,
    header = false,
    titleAfter = false,
    TitleTag = '',
    TitleTagStyle = '',
    id
  } = props

  return (
    <section
      className={classNames(className, 'section container')}
      aria-labelledby={titleId}
      id={id}

    >
      {header && (
        <header className="section__header">

          <div className="section__info">
            {!titleAfter && (
              <TitleTag
                className={classNames('section__title', TitleTagStyle)}
                id={titleId}
              >
                {title}
              </TitleTag>
            )}
            {description && (
              <div className="section__description">
                <p>{description}</p>
              </div>
            )}
          </div>


        </header>
      )}

      <div className="section__body">
        {children}
        {actions && (
          <div className="section__actions">{actions}</div>
        )}
      </div>

      {titleAfter && (
        <h2 className='section__title h3' id={titleId}>
          {title}
        </h2>
      )}
    </section>
  )
}

export default Section