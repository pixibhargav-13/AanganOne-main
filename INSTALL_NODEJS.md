# Installing Node.js on Windows

## Quick Installation Steps

1. **Download Node.js:**
   - Visit: https://nodejs.org/
   - Download the **LTS (Long Term Support)** version (recommended)
   - Choose the Windows Installer (.msi) for your system (64-bit or 32-bit)

2. **Run the Installer:**
   - Double-click the downloaded `.msi` file
   - Follow the installation wizard
   - **Important:** Make sure to check the box that says "Add to PATH" (this is usually checked by default)
   - Click "Install" and wait for the installation to complete

3. **Verify Installation:**
   - Close and reopen your terminal/PowerShell
   - Run these commands to verify:
     ```powershell
     node --version
     npm --version
     ```
   - You should see version numbers for both

4. **Restart Your Terminal:**
   - After installation, close your current terminal/PowerShell window
   - Open a new terminal window
   - Navigate back to your project: `cd C:\Websites\AanganOne`

5. **Install Project Dependencies:**
   ```powershell
   npm install
   ```

6. **Start the Development Server:**
   ```powershell
   npm start
   ```

## Alternative: Using Chocolatey (if you have it installed)

If you have Chocolatey package manager installed, you can install Node.js with:
```powershell
choco install nodejs-lts
```

## Troubleshooting

If `npm` is still not recognized after installation:
1. Restart your computer (sometimes required for PATH changes to take effect)
2. Verify Node.js is in your PATH:
   - Open System Properties → Environment Variables
   - Check that Node.js installation path is in the System PATH variable
   - Default location: `C:\Program Files\nodejs\`

## Need Help?

- Node.js Official Docs: https://nodejs.org/en/docs/
- Node.js Download Page: https://nodejs.org/

