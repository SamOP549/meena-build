import {
    Paper,
    Text,
    TextInput,
    Textarea,
    Button,
    Group,
    SimpleGrid,
    createStyles,
    ThemeIcon,
    rem,
    Input,
    Select
} from '@mantine/core';
import Hero from '@/components/Hero'
import { IconClock, IconPhone, IconMapPin, IconMail, IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';

const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan('sm');

    return {
        wrapper: {
            display: 'flex',
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
            borderRadius: theme.radius.lg,
            padding: rem(4),
            border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
                }`,

            [BREAKPOINT]: {
                flexDirection: 'column',
            },
        },

        form: {
            boxSizing: 'border-box',
            flex: 1,
            padding: theme.spacing.xl,
            paddingLeft: `calc(${theme.spacing.xl} * 2)`,
            borderLeft: 0,

            [BREAKPOINT]: {
                padding: theme.spacing.md,
                paddingLeft: theme.spacing.md,
            },
        },

        fields: {
            marginTop: rem(-12),
        },

        fieldInput: {
            flex: 1,

            '& + &': {
                marginLeft: theme.spacing.md,

                [BREAKPOINT]: {
                    marginLeft: 0,
                    marginTop: theme.spacing.md,
                },
            },
        },

        fieldsGroup: {
            display: 'flex',

            [BREAKPOINT]: {
                flexDirection: 'column',
            },
        },

        contacts: {
            boxSizing: 'border-box',
            position: 'relative',
            borderRadius: theme.radius.lg,
            border: `${rem(1)} solid transparent`,
            padding: theme.spacing.xl,
            flex: `0 0 ${rem(280)}`,

            [BREAKPOINT]: {
                marginBottom: theme.spacing.sm,
                paddingLeft: theme.spacing.md,
            },
        },

        title: {
            marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontSize: rem(28),

            [BREAKPOINT]: {
                marginBottom: theme.spacing.xl,
            },
        },

        control: {
            fill: "#efcd4f",
            [BREAKPOINT]: {
                flex: 1,
            },
        },
    };
});

export default function GetInTouch() {
    const { classes } = useStyles();

    return (
        <div>
            <Hero screen={0} title="Contact Us" />
            <div className='md:px-20 sm:px-10 px-4 break-words my-12'>
                <Paper shadow="md" radius="lg">
                    <div className={classes.wrapper}>
                        <div className={classes.contacts}>
                            <Text fw={700} className={classes.title} c="#000">
                                Reach Us
                            </Text>
                            <div className='flex flex-col text-black'>
                                <div className='flex flex-row items-center space-x-4 my-4'>
                                    <ThemeIcon size={40} radius="md" className='hover:-translate-y-5 ease-in-out duration-300 bg-[#efcd4f]'>
                                        <IconMail size="1.5rem" />
                                    </ThemeIcon>
                                    <div className='w-4/5'>
                                        <p className='text-xs'>Email</p>
                                        <div className='mt-1'>
                                            <Link href="mailto:contact@meenabuild.com">
                                                <p className='sm:text-md text-sm'>contact@meenabuild.com</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center space-x-4 my-4'>
                                    <ThemeIcon size={40} radius="md" className='hover:-translate-y-5 ease-in-out duration-300 bg-[#efcd4f]'>
                                        <IconPhone size="1.5rem" />
                                    </ThemeIcon>
                                    <div className='w-4/5'>
                                        <p className='text-xs'>Phone</p>
                                        <div className='mt-1'>
                                            <Link href="tel:05223518426"><p className='sm:text-md text-sm'>05223518426</p></Link>
                                            <Link href="tel:918881772080"><p className='sm:text-md text-sm'>+91 8881772080</p></Link>
                                            <Link href="tel:919170122534"><p className='sm:text-md text-sm'>+91 9170122534</p></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center space-x-4 my-4'>
                                    <ThemeIcon size={40} radius="md" className='hover:-translate-y-5 ease-in-out duration-300 bg-[#efcd4f]'>
                                        <IconMapPin size="1.5rem" />
                                    </ThemeIcon>
                                    <div className='w-4/5'>
                                        <p className='text-xs'>Office Address</p>
                                        <div className='mt-1'>
                                            <Link href="https://goo.gl/maps/tKGwrctd4NPJFFJR6" target="_blank"><p className='sm:text-md text-sm'>Shop No. 7, State Plaza, Balaganj, Lucknow - 226003</p></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center space-x-4 my-4'>
                                    <ThemeIcon size={40} radius="md" className='hover:-translate-y-5 ease-in-out duration-300 bg-[#efcd4f]'>
                                        <IconClock size="1.5rem" />
                                    </ThemeIcon>
                                    <div className='w-4/5'>
                                        <p className='text-xs'>Working hours</p>
                                        <div className='mt-1'>
                                            <p className='sm:text-md text-sm'>Mon. - Sat. 10 AM - 7 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
                            <Text fw={700} className={classes.title}>
                                Connect With Us!
                            </Text>

                            <div className={classes.fields}>
                                <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                                    <TextInput label="Name" placeholder="Enter Your Name" />
                                    <TextInput label="Phone No" placeholder="Enter Your Phone No" />
                                    <TextInput label="Your email" placeholder="hello@mantine.dev" required />
                                    <TextInput label="Address" placeholder="Enter Your Address" />
                                    <Select
                                        label="Services"
                                        placeholder="Pick One Service"
                                        data={[
                                            { value: 'Turn-key And Construction', label: 'Turn-key And Construction' },
                                            { value: 'Interior Designing', label: 'Interior Designing' },
                                            { value: '2D & 3D Drawings', label: '2D & 3D Drawings' },
                                            { value: 'Vastu Consultancy', label: 'Vastu Consultancy' },
                                            { value: 'Landscaping', label: 'Landscaping' },
                                            { value: 'Renovation', label: 'Renovation' },
                                        ]}
                                    />
                                    <Select
                                        label="When do you plan to start?"
                                        placeholder="Select Time"
                                        data={[
                                            { value: 'Right Now', label: 'Right Now' },
                                            { value: 'Within 1 Week', label: 'Within 1 Week' },
                                            { value: 'Within 1 months', label: 'Within 1 months' },
                                            { value: 'Within 2 - 3 months', label: 'Within 2 - 3 months' },
                                            { value: 'More than 3 months', label: 'More than 3 months' },
                                        ]}
                                    />
                                </SimpleGrid>
                                <Group position="right" mt="md">
                                    <button type='submit' className="bg-[#efcd4f] text-white py-4 px-6 rounded-3xl uppercase text-xs font-bold">
                                        Send message
                                    </button>
                                </Group>
                            </div>
                        </form>
                    </div>
                </Paper>
            </div>
        </div>
    );
}