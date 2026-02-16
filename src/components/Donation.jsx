import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import toast from "react-hot-toast";
import { useForm } from "../hooks/useForm";
import { donationSchema } from "../lib/validationSchemas";
import "../styles/Donation.css";

export function Donation() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const initialState = {
    amount: 50,
    frequency: "once",
    program: "education",
    paymentMethod: "card",
    customAmount: "",
  };

  const {
    values: donation,
    errors,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    validate,
  } = useForm(initialState, null); // We'll validate manually for custom logic

  const handleAmountClick = (amount) => {
    handleChange("amount", amount);
    handleChange("customAmount", "");
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value;
    handleChange("customAmount", value);
    handleChange("amount", value ? parseFloat(value) : null);
  };

  const handleDonate = async () => {
    const finalAmount = donation.customAmount
      ? parseFloat(donation.customAmount)
      : donation.amount;

    if (!finalAmount || finalAmount < 1) {
      toast.error("Please enter a valid donation amount (minimum $1)");
      return;
    }

    if (finalAmount > 100000) {
      toast.error(
        "Maximum donation amount is $100,000. Please contact us for larger donations.",
      );
      return;
    }

    try {
      setIsSubmitting(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success(
        `Thank you! Your ${donation.frequency} donation of $${finalAmount.toFixed(2)} to ${donation.program} has been processed!`,
        {
          duration: 5000,
          icon: "🎉",
        },
      );

      // Reset form after successful submission
      setTimeout(() => {
        handleChange("amount", 50);
        handleChange("customAmount", "");
        handleChange("frequency", "once");
        handleChange("program", "education");
        handleChange("paymentMethod", "card");
      }, 1000);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="donation" id="donate" ref={ref}>
      <div className="container donation-content">
        <motion.div
          className="donation-info"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Make a difference</p>
          <h2 className="section-title">Your Contribution Matters</h2>
          <p>
            Every donation directly supports our programs. Whether it's once or
            ongoing, your generosity empowers vulnerable communities.
          </p>
          <div className="trust-metrics">
            <p>✓ 100% Certified Non-Profit</p>
            <p>✓ Transparent & Audited</p>
            <p>✓ Secure Payments</p>
          </div>
        </motion.div>

        <motion.div
          className="donation-form"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Amount Selection */}
          <div className="form-group">
            <label>Select Amount</label>
            <div className="amount-buttons">
              {[25, 50, 100, 250].map((amt) => (
                <motion.button
                  key={amt}
                  className={`amount-btn ${donation.amount === amt ? "active" : ""}`}
                  onClick={() => handleAmountClick(amt)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  ${amt}
                </motion.button>
              ))}
            </div>
            <input
              type="number"
              placeholder="Or enter custom amount"
              value={donation.customAmount}
              onChange={handleCustomAmount}
              className="custom-input"
              min="1"
              max="100000"
              disabled={isSubmitting}
              aria-label="Custom donation amount"
            />
          </div>

          {/* Frequency */}
          <div className="form-group">
            <label>Frequency</label>
            <div className="frequency-options">
              {["once", "monthly", "yearly"].map((freq) => (
                <motion.button
                  key={freq}
                  className={`freq-btn ${donation.frequency === freq ? "active" : ""}`}
                  onClick={() => handleChange("frequency", freq)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {freq.charAt(0).toUpperCase() + freq.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Program Selection */}
          <div className="form-group">
            <label htmlFor="program-select">Choose Program</label>
            <select
              id="program-select"
              value={donation.program}
              onChange={(e) => handleChange("program", e.target.value)}
              className="select-input"
              disabled={isSubmitting}
              aria-label="Select program to support"
            >
              <option value="education">Education</option>
              <option value="healthcare">Healthcare</option>
              <option value="food-security">Food Security</option>
              <option value="general">General Fund</option>
            </select>
          </div>

          {/* Payment Method */}
          <div className="form-group">
            <label>Payment Method</label>
            <div className="payment-methods">
              {["card", "bank", "paypal"].map((method) => (
                <motion.button
                  key={method}
                  className={`payment-btn ${donation.paymentMethod === method ? "active" : ""}`}
                  onClick={() => handleChange("paymentMethod", method)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  aria-label={`Pay with ${method}`}
                >
                  {method === "card" && "💳 Card"}
                  {method === "bank" && "🏦 Bank"}
                  {method === "paypal" && "🅿️ PayPal"}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Donate Button */}
          <motion.button
            className="btn btn-primary btn-full"
            onClick={handleDonate}
            disabled={isSubmitting}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span> Processing...
              </>
            ) : (
              "Donate Now"
            )}
          </motion.button>

          <p className="donation-note">
            💬 Questions?{" "}
            <a href="mailto:info@rokkersfoundation.org">Contact us</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Donation;
