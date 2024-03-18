import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>IBIT on BNB Chain - NFT Mint and Staking</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/mint")}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/drop.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Mint IBIT NFT</h2>
          <p className={styles.selectBoxDescription}>
            Mint a limited edition NFT to be eligible for rewards.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/stake")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/token.webp" alt="token" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Stake IBIT NFT</h2>
          <p className={styles.selectBoxDescription}>
            Stake and earn USDT rewards from shares of the custom trade bot profits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
