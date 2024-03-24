import React from 'react';

const About = () => {
    return (
        <div className='pt-12'>
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Contact Details</h2>

                <p className='text-xl font-bold'>1. Customer Support Hotline: <a href="#" type='tel' className='text-2xl'>077 1122200</a></p>
                <p className=''>Call our toll-free number at above during business hours to speak with a friendly and knowledgeable representative.</p>
                
                <p className='text-xl font-bold'>2. Email Support: <a href="#" type='tel' className='text-2xl'>bestbookmarket@gmail.com</a></p>
                <p className=''>Send us an email at above email address. Our team will respond promptly, typically within 24 hours.</p>

                <p className='text-xl font-bold'>3. Location: <a href="#" type='tel' className='text-2xl'>No 95, Galle Road, Colombo 4</a></p>
                <p className=''>Visit us during our convenient store hours:
                <ul>
                    <li>Monday - Friday: 7am - 10pm</li>
                    <li>Saturday - Sunday: 8am - 8pm</li>
                </ul>
                </p>

                <p className='text-xl font-bold'>4. Connect with out team members:</p>
                <ul>
                    <li>• Jayaru: 077 0388622</li>
                    <li>• Lakdilu: 077 0802121</li>
                    <li>• Sonal: 077 4256386</li>
                    <li>• Nimantha: 071 3083163</li>
                    <li>• Nisal: 075 0684121</li>
                    <li>• Kaveesha: 075 3284121</li>
                </ul>
                <p>Chat with us instantly through whatsapp. Our team is ready to assist you in real-time.</p><br/>

                <h2 className="text-2xl font-bold mb-2">Services We Offer</h2>
                <p>1. Product Assistance: Unsure about a product or need more information? Our team can provide detailed information about our products, including ingredients, sourcing, and environmental impact.</p>
                <p>2. Order Support: Having issues with an order? Whether it's tracking, returns, or cancellations, our Customer Care team is here to streamline the process for you.</p>
                <p>3. Membership Programs: Learn about our loyalty programs, exclusive offers, and special promotions. Our team can guide you on how to maximize your membership benefits.</p>

                <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                <p>We appreciate your trust in choosing our bookstore for all your literary needs. Our Customer Care team is here to ensure that your journey with us is smooth, enjoyable, and filled with delightful reads. Thank you for being a part of our commitment to spreading the joy of reading and fostering a love for books!
                </p>

            </div>
        </div>
        </div>
    );
};

export default About;
