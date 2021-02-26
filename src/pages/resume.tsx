import SEO from '@/components/SEO/SEO';

const Resume: React.FC = () => {
  return (
    <>
      <SEO title="Curriculum Vitae | Patrick Obermeier | Frontend Developer & Online-Marketing Expert" />
      <iframe src="/doc/CV_EN.pdf" id="pdf" title="Curriculum Vitae" />
      <style jsx>
        {`
          * {
            margin: 0;
            padding: 0;
            border: 0;
            border-style: none;
            overflow: hidden;
          }

          #pdf {
            width: 100vw;
            height: 100vh;
          }
        `}
      </style>
    </>
  );
};

export default Resume;
