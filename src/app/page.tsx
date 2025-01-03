/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sxrUuhObRwI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import {Box, Container, Grid, Heading, Section, Text} from "@radix-ui/themes";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Page() {
    const logos = ['att', 'google', 'meta', 'microsoft'];

    return (
        <main>
            <Navbar/>
            <Section className="w-full py-12 md:py-24 lg:py-32 px-6">
                <Container>
                    <div className="grid lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_900px]">
                        <Image
                            src={"/images/boxing-3.jpg"}
                            width="1000"
                            height="600"
                            alt="Hero"
                            className="mx-auto w-auto h-auto aspect-video rounded-xl"
                        />
                        <div className="my-4 max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                            <div>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Meet the founders.
                                </h1>
                                <Text as={'p'} className="my-4 max-w-[600px] text-gray-500 md:text-xl dark:text-gray-700">
                                    Bio goes here.
                                </Text>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section className="w-full py-12 px-6">
                <Container>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className={'mb-8'}>
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                                New Courses Every Week
                            </div>
                            <Heading as={'h2'} className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Maxxing Learning Stats.</Heading>
                            <Text as={'p'} className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                The platform for rapid big brain progress. Let your team focus on catching up with the latest.
                                Trust us, we know what we&#39;re doing, unlike Coursera.
                            </Text>
                        </div>
                    </div>
                    <div
                        className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold">Infinite knowledge</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Become the smartest person in the room with our infinite knowledge.
                            </p>
                        </div>
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold">Better than Neuralink</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Don&#39;t let Elon Musk control your brain. Use our platform instead.
                            </p>
                        </div>
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold">Edging to learn</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                The only platform that will make you want to learn more 24/7.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>
            <Section className="w-full px-6 py-12 md:py-24 lg:py-32 bg-gray-100 bg-[#0e6aff]">
                <Container className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
                    <Box className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-950">
                            Gym Locations
                        </h2>
                    </Box>

                    <Grid columns={'4'}>
                        <Text className = "mx-auto text-gray-950">
                        3365 Mission Ave Suite F, Oceanside, CA 92058
                        </Text>
                    </Grid>
                </Container>
            </Section>
        </main>
    )
}