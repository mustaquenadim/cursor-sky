import { Card, Layout, Page } from '@shopify/polaris';

export default function HomePage() {
  return (
    <Page narrowWidth>
      {/* <TitleBar title="Cursor Sky" primaryAction={null} /> */}
      <Layout>
        <Layout.Section>
          <Card title="Credit card" sectioned>
            <p>Credit card information</p>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
