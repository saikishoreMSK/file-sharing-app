import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from 'react';

export const EmailTemplate = ({responce}) => {
  const baseUrl = "https://publicate.it/images/HTML-Email-Inspiration-for-Newsletters_-Ideas--Examples.png"
  
  return(
  <Html>
      <Head />
      <Preview>Yelp recent login</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            {/* <Img src={`${baseUrl}`} /> */}
          </Section>

          <Section style={content}>
            <Row>
              {/* <Img
                style={image}
                width={20}
                src={`${baseUrl}`}
              /> */}
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {responce?.emailToSend?.split("@")[0] || "User"},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {responce?.userName} Shared a file with You.
                </Heading>

                <Text style={paragraph}>
                  <b>File Name: {responce?.fileName}</b>
                  
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>File Size: {responce?.fileSize}</b>
                  
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>File Type: {responce?.fileType}</b>
                  
                </Text>
                <Text
                  style={{
                    color: "rgb(0,0,0, 0.5)",
                    fontSize: 14,
                    marginTop: -5,
                  }}
                >
                  *Access and Download File on your own Risk.
                  
                </Text>

                <Text style={paragraph}>
                  Now You can also share this File with Your Friends.
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  Click below button to Access your File.
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column style={containerButton} colSpan={2}>
                <Button style={button} href={responce?.shortUrl || '/f/'} >
                  Download
                </Button>
              </Column>
            </Row>


          </Section>

          <Section style={containerImageFooter}>
            
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 | M Saikishore @2024 copyrights.
            INDIA | www.saikishore.com
          </Text>
        </Container>
      </Body>
    </Html>
)};

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};