# MCP GitMCP Configuration Guide

## Overview
MCP (Model Context Protocol) GitMCP telah dikonfigurasi untuk project Lumbung Group Website. Ini memungkinkan AI tools untuk berinteraksi langsung dengan Git repository.

## Installed Package
- **Package**: `@cyanheads/git-mcp-server`
- **Version**: Latest (2.3.2+)
- **Repository**: https://github.com/julianromli/lumbung-group-website

## Configuration Files

### 1. Claude Desktop Configuration
**File**: `claude_desktop_config.json`

Konfigurasi ini memungkinkan Claude Desktop untuk terhubung dengan Git MCP server:

```json
{
  "mcpServers": {
    "git-mcp-server": {
      "command": "npx",
      "args": [
        "@cyanheads/git-mcp-server"
      ],
      "env": {
        "GIT_WORKING_DIR": "D:\\Projects\\Lumbung Group WEBSITE\\website_scratch",
        "DEBUG": "*"
      }
    }
  }
}
```

### 2. Setup untuk IDE lain

#### VS Code dengan Cline
Tambahkan ke `cline_mcp_settings.json`:
```json
{
  "mcpServers": {
    "git-mcp-server": {
      "command": "npx",
      "args": ["@cyanheads/git-mcp-server"]
    }
  }
}
```

#### Cursor IDE
Tambahkan ke settings MCP:
```json
{
  "mcpServers": {
    "git-mcp-server": {
      "command": "npx",
      "args": ["@cyanheads/git-mcp-server"]
    }
  }
}
```

## Available Git Operations

MCP Git server menyediakan tools untuk:

### Repository Management
- `git_init` - Initialize repository
- `git_clone` - Clone remote repositories
- `git_status` - Check repository status
- `git_clean` - Remove untracked files

### Staging & Committing
- `git_add` - Stage changes
- `git_commit` - Create commits
- `git_diff` - Show changes
- `git_log` - View commit history
- `git_show` - Inspect Git objects

### Branching & Merging
- `git_branch` - Manage branches
- `git_checkout` - Switch branches
- `git_merge` - Merge branches
- `git_rebase` - Rebase commits
- `git_cherry_pick` - Apply specific commits

### Remote Operations
- `git_remote` - Manage remotes
- `git_fetch` - Download from remote
- `git_pull` - Fetch and merge
- `git_push` - Push to remote

### Advanced Features
- `git_tag` - Manage tags
- `git_stash` - Temporary storage
- `git_worktree` - Multiple working trees
- `git_set_working_dir` - Set working directory

## Usage Examples

### Basic Workflow
1. **Check Status**: AI dapat menggunakan `git_status` untuk melihat perubahan
2. **Stage Changes**: `git_add` untuk staging files
3. **Commit**: `git_commit` dengan pesan yang sesuai
4. **Push**: `git_push` ke remote repository

### Branch Management
1. **Create Branch**: `git_branch` untuk membuat branch baru
2. **Switch**: `git_checkout` untuk pindah branch
3. **Merge**: `git_merge` untuk menggabungkan changes

## Security Notes

- MCP server berjalan lokal dan aman
- Tidak ada credentials yang disimpan dalam config
- Git operations menggunakan existing Git configuration
- Working directory terbatas pada project folder

## Troubleshooting

### Common Issues
1. **Server tidak terdeteksi**: Pastikan package terinstall dengan `npm list @cyanheads/git-mcp-server`
2. **Permission errors**: Pastikan Git repository sudah di-initialize
3. **Path issues**: Verifikasi `GIT_WORKING_DIR` path benar

### Debug Mode
Untuk debugging, set environment variable:
```bash
DEBUG=* npx @cyanheads/git-mcp-server
```

## Next Steps

1. Restart Claude Desktop atau IDE yang digunakan
2. Verify koneksi MCP dalam AI assistant
3. Test basic Git operations
4. Configure additional MCP servers jika diperlukan

## Repository Information

- **GitHub URL**: https://github.com/julianromli/lumbung-group-website
- **Local Path**: D:\Projects\Lumbung Group WEBSITE\website_scratch
- **Branch**: main
- **Remote**: origin

---

*Konfigurasi ini memungkinkan AI assistant untuk melakukan Git operations secara otomatis dan membantu dalam development workflow.*