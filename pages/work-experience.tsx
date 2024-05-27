import { useState, useEffect, useMemo } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Text } from '@chakra-ui/react';
import { ExperienceCard, Experience } from '@components';

const WorkExperience: NextPage = () => {
  const router = useRouter();
  const { plain } = router.query;
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    setShowContent(true);
    return () => {
      setShowContent(false);
    };
  }, []);
  const filename = useMemo(() => {
    const parts = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long'
    }).formatToParts(new Date());
    const month = parts.filter((p) => p.type === 'month').map((p) => p.value);
    const year = parts.filter((p) => p.type === 'year').map((p) => p.value);
    return `resume_renato_perez_fullstack_dev_${month}-${year}.pdf`;
  }, []);

  if (!showContent) {
    return null;
  }
  return (
    <>
      <a
        href={`/api/pdf/work-experience?plain=${plain}`}
        download={filename}
        className="downloadBtn"
      >
        Download 2nd page PDF
      </a>
      <Experience>
        <Text fontSize="2xl">Extensive work history</Text>
        <ExperienceCard companyKey="pickfu" plain={plain === 'true'} />
        <ExperienceCard companyKey="pillar" plain={plain === 'true'} />
        <ExperienceCard companyKey="bairesDev" plain={plain === 'true'} />
        <ExperienceCard companyKey="letulet" plain={plain === 'true'} />
      </Experience>
    </>
  );
};

export default WorkExperience;
