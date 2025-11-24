import MainText from '../typography/MainText';
import { MainButton } from '../button/MainButton';
import { OutlineButton } from '../button/OutlineButton';
import ImageWrapper from '../Wrappers/ImageWrapper';
import Link from 'next/link';
import ComponentAnimationOne from '@/animations/ComponentAnimationOne';
import OtherAnimation from '@/animations/OthherAnimationn';
import Header from '../partials/Header';

const MainHero = ({
  title = [], // expects an array of { text, color }
  subtitle,
  btnText1,
  btnText2,
  hasTech,
  technologies = [],
  titleSize,
  btnLink1,
  btnLink2,
}) => {
  const positions = [
    'top-5 left-60',
    'top-60 left-10',
    'bottom-10 left-60',
    'top-5 right-60',
    'top-60 right-10',
    'bottom-10 right-60',
  ];

  return (
    <section className="h-screen bg-herobg bg-cover bg-center bg-no-repeat">
      <Header />
      <div className="relative h-full px-[6vw] py-[4vh]">
        <OtherAnimation>
          <div className="flex h-full items-center justify-center">
            <div className="flex flex-col items-center gap-4 text-center md:w-3/4">
              {/* Title Section */}
              <h1
                className={`${
                  titleSize ? titleSize : 'text-[32px] leading-[38px]'
                } font-lato font-bold tracking-tight`}
              >
                {title.map((ld, i) => (
                  <span key={i} className={ld.color || 'text-mainBlack'}>
                    {ld.text}{' '}
                  </span>
                ))}
              </h1>

              {/* Subtitle */}
              {subtitle && (
                <div className="px-[6vw] md:px-[8vw]">
                  <MainText text={subtitle} color="text-mainBlack/50" />
                </div>
              )}

              {/* Buttons */}
              <div className="mt-4 flex justify-center gap-4 md:gap-8">
                {btnText1 && btnLink1 && (
                  <Link href={btnLink1}>
                    <MainButton text={btnText1} hasIcon={true} />
                  </Link>
                )}
                {btnText2 && btnLink2 && (
                  <Link href={btnLink2}>
                    <OutlineButton text={btnText2} hasIcon={true} />
                  </Link>
                )}
              </div>

              {/* Floating Tech Icons */}
              {hasTech && technologies.length > 0 && (
                <div>
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className={`absolute hidden rounded-[20px] bg-white p-4 shadow-custom-secondary xl:block ${positions[index % positions.length]}`}
                    >
                      <ImageWrapper
                        src={tech}
                        alt={`Tech Icon ${index + 1}`}
                        width={80}
                        height={80}
                        style="w-20 h-20 object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </OtherAnimation>
      </div>
    </section>
  );
};

export default MainHero;
