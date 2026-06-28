import { useState } from "react";

const Calculate = () => {
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("6.0");
  const [result, setResult] = useState(null);
  const [fullResult, setFullResult] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCalculate = () => {
    const numericPrice = Number(price);
    const numericRate = Number(rate);

    if (!price || !numericRate) {
      setResult("0.00");
      return;
    }

    const calculated = (numericPrice / numericRate).toFixed(2);

    setResult(calculated);

    setFullResult(`#P សួស្តីបង សរុបទំនិញទាំងអស់  $${calculated} (មិនបូកបញ្ចូលថ្លៃដឹកពីចិនមកខ្មែរ)

📌 ចំពោះការទិញទំនិញក្នុងហាងតែមួយ បើហាងបំបែកជាច្រើនកញ្ចប់ នឹងគិតថ្លៃដឹកតាមចំនួនកញ្ចប់។ កញ្ចប់ក្រោម 1 គីឡូ គិតជា 1 គីឡូ។ លើស 1 គីឡូ នឹងយកទំហំ និងទម្ងន់ប្រៀបធៀបគ្នា ដើម្បីគិតថ្លៃដឹក។

📌 ចំពោះការបញ្ជាទិញនៅក្នុង Telegram Chat និង Facebook Chat គឺពុំមានការបង្រួមកញ្ចប់ទំនិញចូលគ្នាទេ។

📌 ខាងប្អូនធានាតែចំពោះការបាត់បង់ឥវ៉ាន់ ប៉ុន្តែមិនអាចធានាលើទំនិញបែកបាក់ គុណភាព ឬទំនិញដែលខាងហាងដាក់ខុសពីការបញ្ជាទិញទេ។ ទោះជាយ៉ាងណា ខាងប្អូននឹងព្យាយាមទាក់ទងទាមទារដំណោះស្រាយពីហាងជំនួសឱ្យបង ប៉ុន្តែដំណោះស្រាយគឺអាស្រ័យលើគោលការណ៍របស់ខាងហាង។

សូមអរគុណសម្រាប់ការគាំទ្ររបស់បង 🙏`);

    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullResult);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}> Price Calculator</h1>

        <input
          style={styles.input}
          type="number"
          placeholder="Enter RMB amount"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          onWheel={(e) => e.target.blur()}
        />

        <select
          style={styles.select}
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        >
          <option value="6.0">6.0</option>
          <option value="6.1">6.1</option>
          <option value="6.2">6.2</option>
          <option value="6.3">6.3</option>
          <option value="6.4">6.4</option>
        </select>

        <button style={styles.calculateBtn} onClick={handleCalculate}>
          Calculate
        </button>

        {result !== null && (
          <>
            <div style={styles.resultBox}>
              <h2>${result}</h2>

              <p>
                {price} ÷ {rate} = {result}
              </p>
            </div>
            <button style={styles.copyBtn} onClick={handleCopy}>
              {copied ? "✅ Copied!" : "📋 Copy Message"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "",
    padding: "20px",
  },

  card: {
    width: "700px",
    background: "#fff",
    border: "1px solid #037FF8",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    fontSize: "18px",
    border: "1px solid #ccc",
    outline: "#037FF8",
    borderRadius: "8px",
    marginBottom: "15px",
  },

  select: {
    width: "100%",
    padding: "12px",
    fontSize: "18px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginBottom: "15px",
  },

  calculateBtn: {
    width: "100%",
    padding: "14px",
    fontSize: "18px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#037FF8",
    color: "#fff",
    cursor: "pointer",
    marginBottom: "20px",
  },

  resultBox: {
    textAlign: "center",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px",
    background: "#eef2ff",
  },

  messageBox: {
    whiteSpace: "pre-wrap",
    padding: "20px",
    border: "1px solid #37FF8",
    borderRadius: "10px",
    lineHeight: "1.8",
    maxHeight: "300px",
    overflowY: "auto",
    marginBottom: "20px",
  },

  copyBtn: {
    width: "100%",
    padding: "14px",
    fontSize: "18px",
    border: "none",
    borderRadius: "8px",
    backgroundColor:"#d853f2",
    color:'#ffff',
    fontWeight:"bold",
    cursor: "pointer",
  },
};

export default Calculate;