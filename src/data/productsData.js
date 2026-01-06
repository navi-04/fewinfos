export const productsData = [
  {
    title: "Github repo readme stats",
    description: "A dynamic stats generator for GitHub repositories",
    image: require("../assets/products/p1.png"),
    features: [
      "Customizable stats cards",
      "Supports multiple themes",
      "Real-time data updates",
    ],
    icon: "fas fa-shield-alt",
    price: 499,
    isFree: true,
    category: "Open Source",
    contributeLink: "https://github.com/Fewinfos/github-repo-readme-stats",
    instructionsHtml: `
    <div style="font-family: Arial, sans-serif; color: #003366; max-width: 520px; margin: 0 auto;">

  <h3 style="color: #002244;">Generate GitHub Repo README Stats</h3>

  <form
    onsubmit="generateURL(); return false;"
    style="background: #f0f4f8; padding: 16px; border-radius: 8px;"
  >
    <label style="font-weight: bold;">GitHub Username</label>
    <input
      type="text"
      id="username"
      placeholder="fewinfos"
      required
      style="width: 100%; padding: 8px; margin: 8px 0;"
    />

    <label style="font-weight: bold;">Repository Name</label>
    <input
      type="text"
      id="repo"
      placeholder="github-repo-readme-stats"
      required
      style="width: 100%; padding: 8px; margin-bottom: 12px;"
    />

    <button
      type="submit"
      style="background: #003366; color: white; padding: 10px; border: none; border-radius: 4px;"
    >
      Generate
    </button>
  </form>

  <!-- Generated URL -->
  <div id="urlBox" style="display:none; margin-top: 16px;">
    <p style="font-weight: bold; color:#002244;">Generated URL:</p>

    <div style="display: flex; gap: 8px; align-items: center;">
      <code
        id="generatedURL"
        style="
          flex: 1;
          display:block;
          background:#ffffff;
          padding:10px;
          border-left:4px solid #003366;
          border-radius:6px;
          color:#003366;
          font-size:13px;
          overflow-x:auto;
        "
      ></code>

      <button
        id="copyBtn"
        onclick="copyURL(this)"
        style="
          background:#003366;
          color:#ffffff;
          border:none;
          padding:10px 12px;
          border-radius:6px;
          cursor:pointer;
          font-size:13px;
          white-space:nowrap;
        "
      >
        Copy
      </button>
    </div>
  </div>

  <!-- Preview -->
  <div style="margin-top: 16px;">
    <p style="font-weight: bold; color:#002244;">Preview:</p>
    <img
      id="preview"
      style="max-width:100%; border:1px solid #ccddee; border-radius:6px;"
    />
  </div>

</div>

<script>
  function generateURL() {
    const username = document.getElementById("username").value.trim();
    const repo = document.getElementById("repo").value.trim();

    const url =
      "https://github-repo-readme-stats.vercel.app/api/?username=" +
      encodeURIComponent(username) +
      "&repo=" +
      encodeURIComponent(repo);

    document.getElementById("generatedURL").textContent = url;
    document.getElementById("preview").src = url;
    document.getElementById("urlBox").style.display = "block";
  }

  function copyURL(button) {
    const text = document.getElementById("generatedURL").textContent;
    const originalText = button.textContent;

    navigator.clipboard.writeText(text).then(() => {
      button.textContent = "Copied";
      button.style.background = "#335577";

      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = "#003366";
      }, 2000);
    });
  }
</script>


    `,
  },
  {
    title: "LayerLens",
    description: "An explainability library for deep learning models",
    image: require("../assets/products/p2.png"),
    features: [
      "Layer-wise relevance propagation",
      "Supports TensorFlow and PyTorch",
      "Easy integration with existing models",
    ],
    icon: "fas fa-shield-alt",
    price: 499,
    isFree: true,
    category: "Open Source",
    manualLink: "https://pypi.org/project/layerlens/",
    contributeLink: "https://github.com/navi-04/layerlens",
    instructionsHtml: `
     <div style="font-family: Arial, sans-serif; color: #003366; max-width: 100%; padding: 0 16px; margin: 0 auto; box-sizing: border-box;">

  <h3 style="color:#002244; font-size: 1.2em;">How to Use LayerLens</h3>

  <ol style="padding-left: 20px;">

    <!-- Step 1 -->
    <li style="margin-bottom: 16px;">
      <strong>Install the Package</strong>
      <p style="margin: 8px 0;">Install LayerLens using pip:</p>

      <div style="display:flex; flex-direction:column; gap:8px; width:100%;">
        <code style="display:block; background:#f0f4f8; padding:12px; border-radius:6px; overflow-x:auto; word-wrap:break-word; font-size:0.9em;">
          pip install layerlens
        </code>
        <button onclick="copyCode(this)"
          style="background:#003366;color:#fff;border:none;padding:10px 16px;border-radius:6px;cursor:pointer;font-size:0.9em;width:100%;max-width:120px;">
          Copy
        </button>
      </div>
    </li>

    <!-- Step 2 -->
    <li style="margin-bottom: 16px;">
      <strong>Import the Library</strong>
      <p style="margin: 8px 0;">Import LayerLens in your Python file:</p>

      <div style="display:flex; flex-direction:column; gap:8px; width:100%;">
        <code style="display:block; background:#f0f4f8; padding:12px; border-radius:6px; overflow-x:auto; word-wrap:break-word; font-size:0.9em;">
          from layerlens import Explainer
        </code>
        <button onclick="copyCode(this)"
          style="background:#003366;color:#fff;border:none;padding:10px 16px;border-radius:6px;cursor:pointer;font-size:0.9em;width:100%;max-width:120px;">
          Copy
        </button>
      </div>
    </li>

    <!-- Step 3 -->
    <li style="margin-bottom: 16px;">
      <strong>Create an Explainer</strong>
      <p style="margin: 8px 0;">Pass your trained model to the explainer:</p>

      <div style="display:flex; flex-direction:column; gap:8px; width:100%;">
        <code style="display:block; background:#f0f4f8; padding:12px; border-radius:6px; overflow-x:auto; word-wrap:break-word; font-size:0.9em;">
          explainer = Explainer(model)
        </code>
        <button onclick="copyCode(this)"
          style="background:#003366;color:#fff;border:none;padding:10px 16px;border-radius:6px;cursor:pointer;font-size:0.9em;width:100%;max-width:120px;">
          Copy
        </button>
      </div>
    </li>

    <!-- Step 4 -->
    <li style="margin-bottom: 16px;">
      <strong>Explain Model Predictions</strong>
      <p style="margin: 8px 0;">Generate layer-wise explanations:</p>

      <div style="display:flex; flex-direction:column; gap:8px; width:100%;">
        <code style="display:block; background:#f0f4f8; padding:12px; border-radius:6px; overflow-x:auto; word-wrap:break-word; font-size:0.9em;">
          explanation = explainer.explain(input_data)
        </code>
        <button onclick="copyCode(this)"
          style="background:#003366;color:#fff;border:none;padding:10px 16px;border-radius:6px;cursor:pointer;font-size:0.9em;width:100%;max-width:120px;">
          Copy
        </button>
      </div>
    </li>

    <!-- Step 5 -->
    <li style="margin-bottom: 16px;">
      <strong>Visualize the Results</strong>
      <p style="margin: 8px 0;">Export visual explanations:</p>

      <div style="display:flex; flex-direction:column; gap:8px; width:100%;">
        <code style="display:block; background:#f0f4f8; padding:12px; border-radius:6px; overflow-x:auto; word-wrap:break-word; font-size:0.9em;">
          explainer.visualize(explanation, output_dir="explanations")
        </code>
        <button onclick="copyCode(this)"
          style="background:#003366;color:#fff;border:none;padding:10px 16px;border-radius:6px;cursor:pointer;font-size:0.9em;width:100%;max-width:120px;">
          Copy
        </button>
      </div>
    </li>

  </ol>

</div>

<script>
  function copyCode(button) {
    const code = button.previousElementSibling.textContent.trim();
    const originalText = button.textContent;

    navigator.clipboard.writeText(code).then(() => {
      button.textContent = "Copied";
      button.style.background = "#335577";

      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = "#003366";
      }, 2000);
    });
  }
</script>

    `,
  },
];
