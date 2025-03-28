import React from 'react'
import { motion } from 'framer-motion'

function Dashboard() {
    return (<div >
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100
            }}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            className="
            text-blue-700  text-4xl  font-bold text-center p-6 rounded-xl cursor-pointer absolute left-30 top-35
        "
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                Welcome to Book You Go
            </motion.div>

            <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 0.7,
                    duration: 0.6,
                    type: "spring"
                }}
                className="text-lg text-gray-600 mt-2 "
            >
                Book Your Sports Venue Hassle-Free!
            </motion.p>
        </motion.header>
        <span className='absolute left-26 top-65 w-120 h-50 pl-20 italic text-xl'><p>Your ultimate destination for hassle-free sports ground booking! Whether you're planning a friendly football match, a high-energy cricket tournament, or a weekend tennis game, we've got you covered. Explore a wide range of well-maintained venues, check real-time availability, and book your favorite playground in just a few clicks. With secure payments, instant confirmations, and flexible time slots, organizing your next game has never been easier. Don’t waste time searching—find, book, and play with confidence. Your perfect game starts here! 🏆⚽🎾🏏</p></span>
        <div className="absolute right-20 top-42 h-115 w-115 rounded-2xl bg-gray-500 ">
            <img src="your-image.jpg" alt="Your Image" />

        </div>

    </div>


    )
}

export default Dashboard