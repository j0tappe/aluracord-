import { Box, Button, Text, Image } from '@skynexui/components';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

export default function NotFound() {
    const root = useRouter();

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    backgroundImage:
                        "url(https://wallpaperaccess.com/full/3724556.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundBlendMode: "multiply",


                }}
            >



                <Image
                    styleSheet={{
                        maxHeight: {
                            xs: '40vh',
                            sm: '50vh'
                        },
                        padding: {
                            xs: '20px 30px',
                            sm: '5px 5px'
                        }
                    }}
                    src="https://external-preview.redd.it/SVfkHWVio6HBxhkvDJ4BltHX_1KlTuK6HnGLAJm1IPk.jpg?width=640&crop=smart&auto=webp&s=461c44928437614898795e1e15128d349b18f400"
                />

                <Text
                    variant="heading1"
                    styleSheet={{
                        fontSize: {
                            xs: '18px',
                            sm: '25px'
                        },
                        fontWeight: '600',
                        marginLeft: '30px',
                        color: appConfig.theme.colors.neutrals[100]
                    }}
                >
                    404 error |
                </Text>

                <Text
                    variant="body1"
                    styleSheet={{
                        fontSize:
                        {
                            xs: '16px',
                            sm: '22px'
                        },
                        textAlign: 'center',
                        marginLeft: '1%',
                        color: appConfig.theme.colors.neutrals[100]
                    }}
                >
                    Reage Shinji, entra no EVA
                </Text>


                <Button
                    buttonColors={{
                        contrastColor: appConfig.theme.colors.neutrals["000"],
                        mainColor: appConfig.theme.colors.neutrals[600],
                        mainColorLight: appConfig.theme.colors.primary[400],
                        mainColorStrong: appConfig.theme.colors.primary[600],
                    }}
                    label="Voltar pro EVA"
                    styleSheet={{
                        disabled: {},
                        focus: {},
                        hover: {
                            cursor: 'pointer'
                        },
                        margin: {
                            xs: '10%',
                            sm: '2%'
                        },
                    }}
                    onClick={(event) => root.push("/")}
                />
            </Box>

        </>
    )
}