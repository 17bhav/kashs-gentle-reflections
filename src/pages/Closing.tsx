
import React from 'react';
import Layout from '../components/Layout';

const Closing: React.FC = () => {
  return (
    <Layout>
      <div className="letter-container">
        <h2 className="letter-heading">Thank You</h2>
        
        <p className="letter-paragraph">
          Dear Kash,
        </p>
        
        <p className="letter-paragraph">
          As I close this little digital letter, I want to express my deepest gratitude to you—for everything you are and everything you brought to my life.
        </p>
        
        <p className="letter-paragraph">
          Thank you for your kindness, your intelligence, and your beautiful perspective on life. Thank you for the laughter we shared, the challenges we faced together, and the growth you inspired in me. Thank you for showing me what thoughtfulness and genuine care look like.
        </p>
        
        <p className="letter-paragraph">
          You taught me so much—about music, about resilience, about finding joy in small moments. You showed me how to be more present, more patient, more appreciative of the details that make life rich and meaningful.
        </p>
        
        <p className="letter-paragraph">
          Please know that you hold a special place in my heart that no one else can fill. The chapter we wrote together is one I'll always return to with warmth and gratitude, even as we both continue writing our separate stories.
        </p>
        
        <p className="letter-paragraph">
          Whatever paths we walk, wherever life takes us, I'll be quietly cheering for your happiness and success from afar. You deserve every bit of joy and fulfillment life has to offer.
        </p>
        
        <div className="mt-10 text-center">
          <p className="italic text-lg md:text-xl">
            "Some people arrive and make such a beautiful impact on your life, you can barely remember what life was like without them."
          </p>
          <p className="mt-2 text-sm text-primary/70">— Anna Taylor</p>
        </div>
        
        <p className="letter-paragraph mt-10">
          With endless respect and care,
        </p>
        
        <p className="letter-paragraph mt-4 italic">
          ~ Your name
        </p>
      </div>
    </Layout>
  );
};

export default Closing;
