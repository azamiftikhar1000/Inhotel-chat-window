import Head from 'next/head';

const MyPage = () => (
  <>
    <Head>
      <script src="/widget.js" defer></script>
    </Head>
    <div>{/* Page content */}</div>
  </>
);

export default MyPage;
