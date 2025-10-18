import './CategoryCard.scss'
import classNames from 'classnames'
import Button from "@/components/Button";
import {Image} from "minista";

const CategoryCard = (props) => {
  const {
    title,
    isTitleHidden = false,
    href,
    imgSrc,
    className,
    imgClassName,
    iconName = '',
    isLabelHidden = false,
    // '' default //

    // 'benefits' //
    mode = ''
  } = props

  const hasHeader = !isTitleHidden || !isLabelHidden;

  const imageClassName
    = classNames(imgClassName, 'category-card__image')

  return (
    <div
      className={classNames(className, 'category-card', {
        [`category-card--${mode}`]: mode,
      })}
    >
      {href ? (
        <a className="category-card__image-link" href={href}>
          <Image
            className={imageClassName}
            src={imgSrc}
          />
        </a>
      ) : (
        <Image
          className={imageClassName}
          src={imgSrc}
        />
      )}

      {hasHeader && (
        <div
          className="category-card__header"
        >
          {!isTitleHidden && (
            <h3 className="category-card__title h4">{title}</h3>
          )}

          <div className="category-card__link">
            <Button
              className="category-card__button"
              href={href}
              label='Смотреть больше'
              isLabelHidden={isLabelHidden}
              iconName={iconName}
              iconPosition="after"
            />
          </div>
        </div>
      )}
      <div className="category-card__body">

      </div>
    </div>
  )
}

export default CategoryCard