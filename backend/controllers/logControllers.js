const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "../data/logs.json");

const addLog = async (req, res) => {
  try {
    const { level, message, resourceId, traceId, spanId, commit, metadata } =
      req.body;

    // Validation
    const validLevels = ["error", "warn", "info", "debug"];

    if (!level || !validLevels.includes(level.toLowerCase())) {
      return res.status(400).json({
        message: `level feild missing or invalid`,
      });
    }
    if (!message || typeof message !== "string") {
      return res
        .status(400)
        .json({ message: "message field is required and must be a string" });
    }

    if (!resourceId || typeof resourceId !== "string") {
      return res
        .status(400)
        .json({ message: "resourceId field is required and must be a string" });
    }

    if (!traceId || typeof traceId !== "string") {
      return res
        .status(400)
        .json({ message: "traceId field is required and must be a string" });
    }

    if (!spanId || typeof spanId !== "string") {
      return res
        .status(400)
        .json({ message: "spanId field is required and must be a string" });
    }

    if (!commit || typeof commit !== "string") {
      return res
        .status(400)
        .json({ message: "commit field is required and must be a string" });
    }
    if (metadata !== undefined) {
      if (
        typeof metadata !== "object" ||
        Array.isArray(metadata) ||
        metadata === null
      ) {
        return res
          .status(400)
          .json({ message: "metadata must be a valid JSON object" });
      }
    }
    //validation ends

    let logsData = [];
    if (fs.existsSync(dataPath)) {
      try {
        const rawData = fs.readFileSync(dataPath, "utf-8");

        if (rawData.trim() !== "") {
          try {
            logsData = JSON.parse(rawData);

            if (!Array.isArray(logsData)) {
              return res
                .status(500)
                .json({ message: "Corrupted logs file: Expected an array." });
            }
          } catch (parseErr) {
            return res.status(500).json({
              message: "Corrupted logs file: Invalid JSON format.",
            });
          }
        }
      } catch (error) {
        console.error("Error reading logs file:", error);
        return res.status(500).json({
          message: "An error occurred while reading the logs file.",
        });
      }
    }

    const newLog = {
      id: Date.now(),
      level: level.toLowerCase(),
      message,
      resourceId,
      timestamp: new Date().toISOString(),
      traceId,
      spanId,
      commit,
      metadata,
    };

    logsData.push(newLog);

    fs.writeFileSync(dataPath, JSON.stringify(logsData, null, 2));

    return res.status(201).json({
      success: true,
      message: "Log added successfully!",
    });
  } catch (error) {
    console.error("Error adding log:", error);
    return res.status(500).json({
      message: "An error occurred while adding the log",
    });
  }
};

const showLogs = (req, res) => {
  try {
    if (!fs.existsSync(dataPath)) {
      return res.status(200).json([]);
    }

    const rawData = fs.readFileSync(dataPath, "utf-8");

    let logsData = [];

    if (rawData.trim() === "") {
      // File exists but is empty
      return res.status(200).json([]);
    }

    try {
      logsData = JSON.parse(rawData);

      if (!Array.isArray(logsData)) {
        return res
          .status(500)
          .json({ message: "Corrupted logs file: Expected an array." });
      }
    } catch (parseErr) {
      return res.status(500).json({
        message: "Corrupted logs file: Invalid JSON format.",
      });
    }

    // Sort logs by timestamp descending (recent first)
    logsData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    return res.status(200).json(logsData);
  } catch (error) {
    console.error("Error fetching logs:", error);
    return res.status(500).json({
      message: "An error occurred while fetching logs.",
    });
  }
};

const searchLogs = (req, res) => {
  const { keyword } = req.query;

  if (!keyword || typeof keyword !== "string") {
    return res
      .status(400)
      .json({ message: "Please provide a valid 'keyword' query parameter." });
  }

  try {
    if (!fs.existsSync(dataPath)) {
      return res.status(200).json({
        message: "Log file does not exist. No logs available.",
        data: [],
      });
    }

    const rawData = fs.readFileSync(dataPath, "utf-8");

    if (rawData.trim() === "") {
      return res.status(200).json({
        message: "Log file is empty. No logs available.",
        data: [],
      });
    }

    let logsData = [];

    try {
      logsData = JSON.parse(rawData);

      if (!Array.isArray(logsData)) {
        return res
          .status(500)
          .json({ message: "Corrupted logs file: Expected an array." });
      }
    } catch (parseErr) {
      return res.status(500).json({
        message: "Corrupted logs file: Invalid JSON format.",
      });
    }

    const filteredLogs = logsData.filter((log) =>
      log.message.toLowerCase().includes(keyword.toLowerCase())
    );

    return res.status(200).json(filteredLogs);
  } catch (error) {
    console.error("Error searching logs:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while searching logs." });
  }
};

const filterLogs = (req, res) => {
    const { level, startTime, endTime, resourceId, keyword } = req.query;

    let logsData = [];

    try {
        if (!fs.existsSync(dataPath)) {
            return res.status(200).json({
                message: "No logs found.",
                data: []
            });
        }

        const rawData = fs.readFileSync(dataPath, 'utf-8');

        if (rawData.trim() === '') {
            return res.status(200).json({
                message: "Log file is empty.",
                data: []
            });
        }

        logsData = JSON.parse(rawData);

        if (!Array.isArray(logsData)) {
            return res.status(500).json({
                message: "Corrupted logs file. Expected an array."
            });
        }

        // Start filtering
        let filteredLogs = logsData;

        // Filter by level (supports comma-separated levels like error,info)
        // if (level) {
        //     const levels = level.toLowerCase().split(',').map(l => l.trim());
        //     filteredLogs = filteredLogs.filter(log =>
        //         levels.includes(log.level.toLowerCase())
        //     );
        // }
        if (level) {
            filteredLogs = filteredLogs.filter(log =>
                log.level?.toLowerCase().includes(level.toLowerCase())
            );
        }

        // Filter by timestamp range
        if (startTime || endTime) {
            filteredLogs = filteredLogs.filter(log => {
                const logTime = new Date(log.timestamp).getTime();
                const start = startTime ? new Date(startTime).getTime() : null;
                const end = endTime ? new Date(endTime).getTime() : null;

                if (start && end) return logTime >= start && logTime <= end;
                if (start) return logTime >= start;
                if (end) return logTime <= end;
                return true;
            });
        }

        // Filter by resourceId (case-insensitive partial match)
        if (resourceId) {
            filteredLogs = filteredLogs.filter(log =>
                log.resourceId?.toLowerCase().includes(resourceId.toLowerCase())
            );
        }

        // Keyword search in message (case-insensitive)
        if (keyword) {
            filteredLogs = filteredLogs.filter(log =>
                log.message?.toLowerCase().includes(keyword.toLowerCase())
            );
        }

        return res.status(200).json({
            count: filteredLogs.length,
            data: filteredLogs
        });

    } catch (error) {
        console.error("Error filtering logs:", error);
        return res.status(500).json({
            message: "An error occurred while filtering logs."
        });
    }
};

module.exports = {
  addLog,
  showLogs,
  searchLogs,
  filterLogs
};
