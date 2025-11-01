import BlogCard from '@/components/card/BlogCard';
import LoginForm from '@/components/form/LoginForm';
import OtherPageHero from '@/components/hero/OtherPageHero';
import LightPageStarter from '@/components/section/LightPageStarter';
import { HeaderOne } from '@/components/typography/HeaderOne';
import MainText from '@/components/typography/MainText';
import DoublePageBorders from '@/components/Wrappers/DoublePageBorders';
import PageBorders from '@/components/Wrappers/PageBorders';
import Link from 'next/link';
import LogoWhite from '@/public/images/logoWhite.png';
import PaginationButton from '@/components/button/PaginationButton';
import features5 from '@/public/images/featuresbg/features5.png';
import ComponentAnimationOne from '@/animations/ComponentAnimationOne';
import ComponentAnimationTwo from '@/animations/ComponentAnimationTwo';

export const metadata = {
  title: 'Mask HR',
  description: 'Welcome to Mask HR',
};

export default function Home() {
  const ourFeaturedBlog = [
    {
      heading: 'HR INSIGHTS . 10 MIN',
      bgImg: features5,
      title: 'Building a world-class hiring service team with MaskHR',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      btnLink: '/',
      btnText: 'Read Now >',
    },
    {
      heading: 'HR INSIGHTS . 10 MIN',
      bgImg: features5,
      title: 'Building a world-class hiring service team with MaskHR',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      btnLink: '/',
      btnText: 'Read Now >',
    },
    {
      heading: 'HR INSIGHTS . 10 MIN',
      bgImg: features5,
      title: 'Building a world-class hiring service team with MaskHR',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      btnLink: '/',
      btnText: 'Read Now >',
    },
  ];

  const ourBlogPost = [
    {
      heading: 'HR INSIGHTS . 10 MIN',
      bgImg: features5,
      title: 'Building a world-class hiring service team with MaskHR',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      btnLink: '/',
      btnText: 'Read Now >',
    },
    {
      heading: 'HR INSIGHTS . 10 MIN',
      bgImg: features5,
      title: 'Building a world-class hiring service team with MaskHR',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      btnLink: '/',
      btnText: 'Read Now >',
    },
    {
      heading: 'HR INSIGHTS . 10 MIN',
      bgImg: features5,
      title: 'Building a world-class hiring service team with MaskHR',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      btnLink: '/',
      btnText: 'Read Now >',
    },
    {
      heading: 'HR INSIGHTS . 10 MIN',
      bgImg: features5,
      title: 'Building a world-class hiring service team with MaskHR',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      btnLink: '/',
      btnText: 'Read Now >',
    },
    {
      heading: 'HR INSIGHTS . 10 MIN',
      bgImg: features5,
      title: 'Building a world-class hiring service team with MaskHR',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      btnLink: '/',
      btnText: 'Read Now >',
    },
    {
      heading: 'HR INSIGHTS . 10 MIN',
      bgImg: features5,
      title: 'Building a world-class hiring service team with MaskHR',
      subtitle:
        'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  ',
      btnLink: '/',
      btnText: 'Read Now >',
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="">
        <OtherPageHero
          title={'MaskHR Blog'}
          subtitle={
            'Expertise at your fingertips. Access our Insights on remote hiring and more'
          }
        />
        <PageBorders>
          <div className="flex flex-col gap-4 md:gap-8">
            <ComponentAnimationOne x={50}>
              {' '}
              <HeaderOne text={'Featured Blog Post'} textLeft={true} />
            </ComponentAnimationOne>{' '}
            <div className="grid gap-4 md:grid-cols-2 md:gap-8">
              {/* image */}
              <ComponentAnimationTwo x={-100} duration={1.5}>
                <div className="h-[40vh] rounded-[30px] bg-features5 bg-cover bg-top bg-no-repeat md:h-full" />
              </ComponentAnimationTwo>{' '}
              {/* text */}
              <ComponentAnimationTwo x={100} duration={1.5}>
                {' '}
                <div className="flex flex-col gap-4 p-[30px] md:gap-8">
                  <MainText
                    text={'HR INSIGHTS . 10 MIN'}
                    textLeft={true}
                    bold={true}
                  />
                  <HeaderOne
                    text={
                      'Building a world-class hiring service team with MaskHR'
                    }
                    size={' font-semibold'}
                    textLeft={true}
                  />
                  <p className="flex justify-center text-[8px] leading-[10px] text-mainBlack md:justify-start md:text-[16px] md:leading-[16px]">
                    {`Jan 17, ${new Date().getFullYear()}  `}
                  </p>
                  <MainText
                    text={
                      'Discover the power of MaskHR by leveraging our rich talent pool to to take your team to the next level while creating a healthy work culture in your organization  '
                    }
                    color="text-secondary"
                    textLeft={true}
                  />

                  {/* button */}
                  <Link href={'/'}>
                    <button
                      className={`font-lato flex w-full cursor-pointer items-center justify-center gap-2 rounded-[24px] text-[10px] font-normal leading-[10px] text-primary md:justify-start lg:text-[14px] lg:leading-[16px]`}
                    >
                      {'Read Now >'}
                    </button>
                  </Link>
                </div>
              </ComponentAnimationTwo>
            </div>
            <div className="grid gap-4 md:grid-cols-3 md:gap-8">
              {ourFeaturedBlog.map((item, index) => (
                <div key={index}>
                  <ComponentAnimationOne
                    y={-100}
                    delay={index * 0.2}
                    duration={index * 1.5}
                  >
                    <BlogCard
                      heading={item.heading}
                      bgImg={item.bgImg}
                      title={item.title}
                      subtitle={item.subtitle}
                      btnLink={item.btnLink}
                      btnText={item.btnText}
                    />
                  </ComponentAnimationOne>
                </div>
              ))}
            </div>
          </div>
        </PageBorders>
        <DoublePageBorders
          background={'bg-footerbg bg-cover bg-no-repeat bg-center'}
        >
          <div className="flex flex-col gap-4 md:gap-8" id="FAQs">
            <LightPageStarter
              icon={LogoWhite}
              title={'Join US! Upcoming MaskHR Webminars'}
              subtitle={
                "Whether you're looking for expert advice from HR leaders or ideas for upleveling your workplace, MaskHR's webinars have you covered."
              }
            />{' '}
            <ComponentAnimationOne x={100}>
              <div className="grid justify-items-center">
                <LoginForm btnText={'Register Now'} />
              </div>
            </ComponentAnimationOne>
          </div>
        </DoublePageBorders>
        <PageBorders>
          <div className="flex flex-col gap-4 md:gap-8">
            <ComponentAnimationOne x={50}>
              <HeaderOne text={'All Blog Post'} textLeft={true} />
            </ComponentAnimationOne>
            <div className="grid gap-4 md:grid-cols-3 md:gap-8">
              {ourBlogPost.map((item, index) => (
                <div key={index}>
                  {' '}
                  <ComponentAnimationOne y={-100} delay={index * 0.2}>
                    {' '}
                    <BlogCard
                      heading={item.heading}
                      bgImg={item.bgImg}
                      title={item.title}
                      subtitle={item.subtitle}
                      btnLink={item.btnLink}
                      btnText={item.btnText}
                    />
                  </ComponentAnimationOne>
                </div>
              ))}
            </div>
            <ComponentAnimationOne duration={1.5}>
              <PaginationButton />
            </ComponentAnimationOne>
          </div>
        </PageBorders>
      </div>
    </div>
  );
}
