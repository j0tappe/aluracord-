import Link from 'next/link';
import { Box, Image, Text } from '@skynexui/components';
import appConfig from '../config.json';


const NotFound = () => {

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                }}
            >
                <Image
                    styleSheet={{
                        width: "50%"

                    }}
                    src="https://external-preview.redd.it/SVfkHWVio6HBxhkvDJ4BltHX_1KlTuK6HnGLAJm1IPk.jpg?width=640&crop=smart&auto=webp&s=461c44928437614898795e1e15128d349b18f400"
                />


                <Text
                    variant="heading1"
                    styleSheet={{
                        color: appConfig.theme.colors.neutrals[200],
                        fontSize: '16px',
                        padding: '3px 10px',
                    }}
                >
                    404 error |
                </Text>
                <Text
                    variant="body1"
                    styleSheet={{
                        color: appConfig.theme.colors.neutrals[200],
                        fontSize: '16px',
                        padding: '3px 10px',
                    }}
                >
                    Reage Shinji, entra no EVA
                </Text>
            </Box>
        </>

    );

}

export default NotFound;