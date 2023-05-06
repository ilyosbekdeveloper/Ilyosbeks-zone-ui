import ResumeImg from '../imgs/ic_resume_job.svg'
import SearchJob from '../imgs/ic_search_job.svg'

const JobsName = [
    {
        img: ResumeImg,
        step: 'Step 1',
        title: 'Create an account',
        description: 'Nunc nonummy metus. Donec elit libero.',
    },
    {
        img: ResumeImg,
        step: 'Step 2',
        title: 'Complete your profile',
        description: 'Nunc nonummy metus. Donec elit libero.',
    },
    {
        img: SearchJob,
        step: 'Step 3',
        title: 'Search your job',
        description: 'Nunc nonummy metus. Donec elit libero.',
    },
]

export const Jobs = () => JobsName;